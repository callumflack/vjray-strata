import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import globalStyles from '../global'
import theme from '../theme';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

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