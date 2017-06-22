import { ThemeProvider } from 'styled-components'
import globalStyles from './global.js'
import theme from './theme.js';
import Header from './Header.js';
import Footer from './Footer.js';

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <div>

      <Header />

      <main>
        {props.children}
      </main>

      <Footer />

    </div>
  </ThemeProvider>
);

export default Layout;