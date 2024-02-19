import { globalStyle } from '@vanilla-extract/css'
import { theme } from './main-theme.css'

globalStyle('html, body', {
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: 1.7,
  margin: 0,
  padding: 0,
  background: theme.color.background.main,
  color: theme.color.text.main,
})

globalStyle('main', {
  margin: '0 auto',
  maxWidth: 'calc(100vw - 2em)',

  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 1024,
    },
  },
})

globalStyle('a', {
  color: theme.color.text.action,
  textDecoration: 'none',
})

globalStyle('p', {
  marginTop: theme.spacing.small,
  marginBottom: theme.spacing.small,
})

globalStyle('pre', {
  fontFamily: 'monospace',
  padding: theme.spacing.xsmall,
  color: theme.color.text.code,
  background: theme.color.background.code,
  borderRadius: 5,
})

globalStyle('code', {
  fontFamily: 'monospace',
  color: theme.color.text.code,
  background: theme.color.background.code,
})

globalStyle('blockquote', {
  background: theme.color.background.main,
  padding: theme.spacing.small,
  marginLeft: theme.spacing.small,
  marginRight: theme.spacing.small,
  borderLeft: `solid 1px ${theme.color.text.altAction}`,
  fontStyle: 'italic',
})

globalStyle('footer', {
  textAlign: 'center',
})
