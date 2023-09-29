import { Inter,Open_Sans,Quicksand } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './globals.css'
import IrArriba from '@/components/IrArriba'
const quicksand = Quicksand({subsets: ['latin','latin-ext','vietnamese']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
        <Footer />
        <IrArriba />
        
      </body>
    </html>
  )
}
