import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
export const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#e4e5f1')(props),
      },
    }),
  },
})
