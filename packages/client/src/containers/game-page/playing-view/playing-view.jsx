/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { isNil } from 'lodash'
import CryptoJS from 'crypto-js'
import { Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { styles } from './playing-view.styles'

function PlayingView ({ player, ...props }) {
  const [mission, setMission] = useState()

  useEffect(() => {
    const session = Cookies.get('risk_session')
    if (!isNil(session) && !isNil(player)) {
      const data = JSON.parse(session)
      const playerKeyBytes = CryptoJS.AES.decrypt(player.mission, data.player.key)
      const mission = playerKeyBytes.toString(CryptoJS.enc.Utf8)
      setMission(mission)
    }
  }, [player])

  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.mission}>{mission}</Typography>
    </div>
  )
}

export default PlayingView
