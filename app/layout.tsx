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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="icon.png" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;500;600;700&display=swap"
          rel="stylesheet"
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
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/style.min.css" />
      </head>
      <body>
        <GoogleAnalytics gaId="G-XYW856B553" />
        {children}
      </body>
    </html>
  )
}
