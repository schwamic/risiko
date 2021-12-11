/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { isNil, isEmpty } from 'lodash'
import CryptoJS from 'crypto-js'
import { Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { styles } from './playing-view.styles'
import { content } from './playing-view.content'

function PlayingView ({ player, ...props }) {
  const [mission, setMission] = useState()

  useEffect(() => {
    if (!isNil(player)) {
      const session = Cookies.get('risk_session')
      if (!isNil(session)) {
        const data = JSON.parse(session)
        const playerKeyBytes = CryptoJS.AES.decrypt(player.mission, data.player.key)
        const mission = playerKeyBytes.toString(CryptoJS.enc.Utf8)
        setMission(isEmpty(mission) ? content.warning : mission)
      } else {
        setMission(content.warning)
      }
    }
  }, [player])

  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.mission}>{mission}</Typography>
    </div>
  )
}

export default PlayingView
