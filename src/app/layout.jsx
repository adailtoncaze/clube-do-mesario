import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clube do Mesário',
  description: 'Benefícios exclusivos para mesários e colaboradores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
} 