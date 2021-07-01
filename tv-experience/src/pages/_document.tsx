import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {getCssString, global} from '@/theme.config';

let globalStyles = global({
  body: {
    margin: 0,
    fontFamily: '$sans',
    background: 'black',
  },
});

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap'
            rel='stylesheet'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{__html: getCssString()}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
