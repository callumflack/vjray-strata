import globalStyles from '../css/global.js'
import Header from './Header.js';
import Footer from './Footer.js';

const Layout = (props) => (
  <div>
    <Header />

    <main>
      {props.children}
    </main>

    <Footer />
  </div>
);

export default Layout;
