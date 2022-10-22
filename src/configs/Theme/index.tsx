import { createTheme } from '@mui/material/styles'
import { ThemeOptions } from '@mui/material'

const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'roboto',
  },
})

export default theme
