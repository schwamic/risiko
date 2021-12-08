/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { isNil } from 'lodash'
import { Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { styles } from './playing-view.styles'

function PlayingView ({ player, ...props }) {
  const [mission, setMission] = useState()

  useEffect(() => {
    const session = Cookies.get('risk_session')
    if (!isNil(session)) {
      const data = JSON.parse(session)
      const key = data.player.key
      // TODO: decrypt mission
      setMission(player.mission)
    }
  }, [player])

  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.mission}>{mission}</Typography>
    </div>
  )
}

export default PlayingView
