import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">CaviteWisdom</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/newspapers" className="hover:text-blue-200">Newspapers</Link>
              <Link href="/about" className="hover:text-blue-200">About Us</Link>
              <Link href="/contact" className="hover:text-blue-200">Contact</Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CaviteWisdom</h3>
              <p className="text-gray-300">Your trusted source for local news and information.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
                <Link href="/newspapers" className="block text-gray-300 hover:text-white">Newspapers</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">About Us</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300">Email: info@cavitewisdom.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
            <p>&copy; 2024 CaviteWisdom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}