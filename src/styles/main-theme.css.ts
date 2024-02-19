import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme('body', {
  color: {
    background: {
      main: '#181818',
      alt: '#1F1F1F',
      code: '#282A36',
    },
    text: {
      main: '#CCCCCC',
      action: '#97DCFE',
      altAction: '#E4C08D',
      code: '#F8F8F2',
    },
    border: {
      main: '#333',
    },
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '12px',
  },
})
