import { Inter } from 'next/font/google'
import './globals.css'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  loadDevMessages();
  loadErrorMessages();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
