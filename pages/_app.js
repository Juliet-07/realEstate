/*
 * page: _app
 * author: Favour George
 * Date: April 9, 2020
 * Override default Next.js app behaviour
 */

import React from "react";
import App from "next/app";
import Head from "next/head";
import ThemeProvider from "../config/themes/ThemeProvider";
import {withApollo} from "../lib/apollo/withApollo";
import Provider from "../store/provider";

class ElectoralRecall extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <Head>
          <title>The Nigerian Petition</title>
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

export default withApollo(ElectoralRecall);
