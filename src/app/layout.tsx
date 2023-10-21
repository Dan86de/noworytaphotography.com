import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Noworytaphotography - Katarzyna Noworyta',
  description: 'Interior photographer Katarzyna Noworyta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body >{children}</body>
    </html>
  )
}
