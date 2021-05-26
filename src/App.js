import { Home } from './pages/Home/Home'
import {ThemeProviderMaterial } from './styles/global'

function App() {

  return (
    <ThemeProviderMaterial >
      <Home />
    </ThemeProviderMaterial>
  );
}

export default App;
