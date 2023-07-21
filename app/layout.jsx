import 'styles/globals.css';
import Sidebar from "@/components/Sidebar"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Dashboard',
  description: 'Intelligently Display Quantifiable Business Data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        <div className=''>
          <div className=''/>
        </div>
        <main className=''>
          <Sidebar/>
          {children}
        </main>
      </body>
    </html>
  )
}


