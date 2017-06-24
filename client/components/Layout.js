import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import globalStyles from './global.js'
import theme from './theme.js';
import Header from './Header.js';
import Footer from './Footer.js';

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

export default ({ children, title = 'VJ Ray Strata, Sydney' }) => (
  <ThemeProvider theme={ theme }>
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />

      <main>
        { children }
      </main>

      <Footer />

    </div>
  </ThemeProvider>
);