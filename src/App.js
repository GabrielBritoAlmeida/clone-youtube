import { Home } from './Home'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



function App() {
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


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
