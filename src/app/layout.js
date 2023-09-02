import Footer from './components/Header/Footer'
import Header from './components/Header/Header'
import SubHeader from './components/Header/SubHeader'
import TitleHeader from './components/Header/TitleHeader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aesop | Home',
  description: 'Home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDFCF0]`}>
        <TitleHeader />
        <SubHeader />
        <Header />
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
