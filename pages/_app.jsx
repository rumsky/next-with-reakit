import React from 'react';
import App, { Container } from 'next/app';

import { createGlobalStyle } from 'styled-components';
import { Provider } from 'reakit';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
