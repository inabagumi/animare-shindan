import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    let initialProps: DocumentInitialProps

    try {
      initialProps = await super.getInitialProps({
        ...ctx,
        renderPage: () =>
          ctx.renderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />)
          })
      })
      initialProps.styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    } catch {
      initialProps = await super.getInitialProps(ctx)
    } finally {
      sheet.seal()
    }

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="ja" prefix="og: https://ogp.me/ns#">
        <Head>
          <link
            as="style"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:700,900&amp;display=optional"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?family=Material+Icons&amp;display=swap"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:700,900&amp;display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Material+Icons&amp;display=swap"
            rel="stylesheet"
          />
          <link href="/manifest.webmanifest" rel="manifest" />
          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
