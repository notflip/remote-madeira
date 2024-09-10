import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/flaticon/flaticon_gowilds.css"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/nice-select/css/nice-select.css"
        />
        <link rel="stylesheet" href="assets/vendor/animate.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
    </head>
    <body>
    <GoogleAnalytics gaId="G-XYW856B553" />
        {children}
      </body>
    </html>
  )
}
