import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider, Theme } from '@emotion/react'
import { createContext, PropsWithChildren, useContext } from 'react'

declare module '@emotion/react' {
  export interface Theme {
    background: string
    foreground: string
    primary: string
    secondary: string
    inputPlaceholder: string
    inputBackground: string
    white: string
    dim: string
    verified: string
  }
}

export const mainTheme: Theme = {
  background: '#FBFBFB',
  foreground: '#D9D9D9',
  primary: '#141414',
  secondary: '#7B7B7B',
  inputPlaceholder: '#A1A1A1',
  inputBackground: '#F4F4F4',
  white: '#FBFBFB',
  dim: '#A9A9A9',
  verified: '#45B732' // Green
}

const Context = createContext({})

export const useTheme = () => useContext(Context)

const emotionCache = createCache({ key: 'emotion-css'})
emotionCache.compat = true

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={mainTheme}>
      {children}
    </ThemeProvider>
  </CacheProvider>
)

export default Provider
