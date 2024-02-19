import { globalStyle } from '@vanilla-extract/css'
import { theme } from '../../../../styles/main-theme.css'

globalStyle('hn-comment', {
  display: 'block',
  background: theme.color.background.alt,
  outline: `solid 1px ${theme.color.border.main}`,
  borderRadius: 5,
  padding: theme.spacing.medium,
  marginBottom: theme.spacing.small,
})

globalStyle('p > hn-comment', {
  marginTop: theme.spacing.medium,
})
