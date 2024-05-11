import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import siteMetadata from '../data/siteMetadata'

export const metadata: Metadata = {
  title: siteMetadata.bio.name,
  description: siteMetadata.bio.intro,
  robots: { follow: false, index: false },
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
