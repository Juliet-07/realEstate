/*
 * Override default Next.js app behaviour
 */

import React from "react";
import App from "next/app";
import Head from "next/head";
import ThemeProvider from "../config/themes/ThemeProvider";
import {withApollo} from "../lib/apollo/withApollo";
import Provider from "../store/provider";

class AEP extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <Head>
          <title>A & E Properties</title>
        </Head>
        <ThemeProvider>
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withApollo(AEP);
