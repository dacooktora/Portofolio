import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhamad Novreysa - Portofolio',
  description: 'Crypto Enthusiast',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
