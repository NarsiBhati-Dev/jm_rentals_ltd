import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Geist, Geist_Mono } from 'next/font/google';
import siteMetadata from '@/data/siteMetadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />

        {/* Favicons */}
        <link
          rel='icon'
          type='image/png'
          href='/favicons/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicons/favicon.svg' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='J&M' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-black antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
