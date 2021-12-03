/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { Snackbar, Link, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Toast } from '../../../components'
import { content } from './game-link.content'
import { styles } from './game-link.styles'

function GameLink ({ game, ...props }) {
  const isTabletSize = useMediaQuery('(min-width:600px) and (max-width: 800px)', { noSsr: true })
  const [isOpen, setIsOpen] = useState(false)

  const copyLinkToClipboard = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div {...props}>
      <Link underline='none' variant='text' component='button' onClick={copyLinkToClipboard}>
        <Typography css={styles.title} variant='h2' component='h1'>
          {game.name.length > 18 ? `${game.name.substring(0, isTabletSize ? 10 : 20)}...` : game.name}
          <Typography component='span'>🔗</Typography>
        </Typography>
      </Link>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={2500}
      >
        <Toast message={content.actions.info} />
      </Snackbar>
    </div>
  )
}

export default GameLink
