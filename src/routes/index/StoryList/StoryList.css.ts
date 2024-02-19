import { globalStyle } from '@vanilla-extract/css'
import { theme } from '../../../styles/main-theme.css'

globalStyle('hn-story-list', {
  display: 'block',
  background: theme.color.background.alt,
  borderRadius: 5,
})
