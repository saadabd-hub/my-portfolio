import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
          <script
          data-project-id={process.env.METICULOUS_PROJECT_ID}
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
        )}      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
