/*
 * Override default Next.js document behaviour
 */

import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

export default class AEP extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name={"viewport"}
            content={"initial-scale=1.0, width=device-width"}
            key={"viewport"}
            user-scalable={"no"}
          />
          <link rel="stylesheet" href="/toastr.css" />
          <link rel="icon" type="image/png" href="/electoral-recall-icon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />

          {/*Global site tag (gtag.js) - Google Analytics*/}
          {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-2W95NRHGMF" />*/}
          {/*<script>*/}
          {/*  if (process.browser) {*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*    function gtag(){dataLayer.push(arguments)}*/}
          {/*    gtag('js', new Date());*/}

          {/*    gtag('config', 'G-2W95NRHGMF');*/}
          {/*  }*/}
          {/*</script>*/}
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=G-2W95NRHGMF'+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-2W95NRHGMF');`}} />
        </Head>

        <noscript
          dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-2W95NRHGMF" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}}
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
