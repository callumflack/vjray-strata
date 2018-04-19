import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import globalStyles from "./global";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

const Layout = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.element
};

Layout.defaultProps = {
  children: "",
  title: "VJ Ray Strata Management, Sydney"
};

export default Layout;
