import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f44336"
      },
      secondary: {
        main: "#3f51b5"
      }
    }
  })


export function ThemeProviderMaterial({children}) {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}