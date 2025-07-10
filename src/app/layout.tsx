import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tanoxi Technology",
  description: 'Your trusted shopping destination',
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <LanguageProvider>
            <CartProvider>
              <Navbar />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CartProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
