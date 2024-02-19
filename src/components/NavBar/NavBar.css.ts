import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '../../styles/main-theme.css'

globalStyle('hn-nav-bar', {
  display: 'flex',
  justifyContent: 'space-between',
  background: theme.color.background.alt,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  marginBottom: theme.spacing.medium,
})

globalStyle(`hn-nav-bar a`, {
  display: 'flex',
  flex: 1,
  color: theme.color.text.altAction,
  borderLeft: `solid 1px ${theme.color.background.main}`,
  borderRight: `solid 1px ${theme.color.background.main}`,
  fontWeight: 'bold',
  justifyContent: 'center',
  alignContent: 'center',
})
