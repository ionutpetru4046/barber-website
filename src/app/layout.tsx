// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '../components/Provider'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Barber Website',
  description: 'Modern barber booking website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
