import '../styles/globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { ServerThemeProvider } from '@wits/next-themes'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Ericlys Portfolio',
  description: 'Um pouco melhor a cada dia...',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ServerThemeProvider
      defaultTheme="system"
      value={{ light: 'light', dark: 'dark' }}
      attribute="class"
    >
      <html lang="en">
        <body
          className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-200 font-sans text-gray-700 dark:bg-black dark:text-gray-300`}
        >
          {children}
        </body>
      </html>
    </ServerThemeProvider>
  )
}
