import { globalStyle } from '@vanilla-extract/css'
import { theme } from '../../../styles/main-theme.css'

globalStyle('hn-story', {
  display: 'block',
  marginBottom: theme.spacing.medium,
})
