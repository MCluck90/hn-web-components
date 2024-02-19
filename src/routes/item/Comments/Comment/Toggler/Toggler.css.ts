import { globalStyle } from '@vanilla-extract/css'
import { theme } from '../../../../../styles/main-theme.css'

globalStyle('hn-comment-toggler', {
  cursor: 'pointer',
  filter: 'invert(1)',
  marginRight: theme.spacing.small,
})
