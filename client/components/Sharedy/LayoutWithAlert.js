import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import globalStyles from "./global";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

class Layout extends React.Component {
  componentDidMount() {
    // Display a warning message if cilent is using IE 11 or below
    // React has compatibility issues with IE 11 or below
    // FYI this method has been well tested & doesn't work:
    // if (ua.indexOf("MSIE") >= 0) {
    const ua = window.navigator.userAgent;
    if (ua.indexOf("Trident") !== -1) {
      alert(
        `The VJ Ray Strata website doesn't work well on Microsoft Internet Explorer. Please use a modern browser like Chrome, Edge or Safari instead.`
      );
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

Layout.defaultProps = {
  title: "VJ Ray Strata Management, Sydney"
};

export default Layout;
