import globalStyles from '../css/global.js'
import Header from './Header';

const Layout = (props) => (
  <div>
    <Header />

    <main>
      {props.children}
    </main>
  </div>
);

export default Layout;
