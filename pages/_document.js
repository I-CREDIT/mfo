import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
            {/* <!-- Google Tag Manager --> */}
            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6NDPH8');`}}></script>
            {/* <!-- End Google Tag Manager --> */}
            <meta name="description"
              content="Деньги в кредит, сервис получения микрозаймов онлайн, удобный калькулятор расчета микрокредита на карту, первые 7 дней без процентов, каждому 100 клиенту займ в подарок" />
            <meta name="yandex-verification" content="a9d4b76bb5e15aa6" />
            <meta name="yandex-verification" content="a9d4b76bb5e15aa6" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="shortcut icon" href="/logo192.png"/>
            <script src="https://s3.eu-central-1.amazonaws.com/verilive-statics.verigram.ai/verilive-v1.13.x.js"></script>
        <body>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6NDPH8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69923231-1"></script>
          

          <script src="/js/myscript.js"></script>
          <script type="text/javascript" src="/js/myscript2.js"></script>
          <script defer src='/js/verilive_1.4.4.js'></script>
          <script defer src='/js/veridoc.js'></script>
          <noscript>
            <div>
              <img src="https://mc.yandex.ru/watch/66946039" style={{position: 'absolute', left: '-9999px'}} alt=""  />
            </div>
          </noscript>
          <script src="/js/myscript3.js"></script>
          <script src="/js/myscript4.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
