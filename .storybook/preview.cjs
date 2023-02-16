import { MemoryRouter } from 'react-router-dom'
import theme from './companyTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
}

export const decorators = [
  Story => (
    <MemoryRouter>
        <Story />
    </MemoryRouter>
  ),
]
