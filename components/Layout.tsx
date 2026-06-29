import Link from 'next/link'
import { ReactNode } from 'react'

// load site config (single source of truth for contact/social info)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const site = require('../site.config')

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
              <p className="text-gray-300">Email: <a className="hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
              <p className="text-gray-300">Phone: <a className="hover:underline" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></p>
              {site.social && (
                <div className="mt-3 flex items-center gap-3">
                  {site.social.facebook && (
                    <a
                      className="text-gray-300 hover:text-white"
                      href={site.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.1 5.66 21.3 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.3 22 17.1 22 12.07z" />
                      </svg>
                    </a>
                  )}
                  {site.social.twitter && (
                    <a
                      className="text-gray-300 hover:text-white"
                      href={site.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.1 1.53-1.9-.68.4-1.42.7-2.22.86C18.7 4.5 17.8 4 16.8 4c-1.54 0-2.79 1.26-2.79 2.8 0 .22.02.43.07.64-2.32-.12-4.38-1.23-5.76-2.94-.24.42-.38.9-.38 1.41 0 .97.49 1.83 1.24 2.33-.46-.01-.9-.14-1.28-.36v.04c0 1.36.97 2.5 2.25 2.76-.24.06-.5.09-.76.09-.19 0-.37-.02-.54-.05.37 1.15 1.44 1.99 2.7 2.01C8.8 16.6 7.4 17.26 5.9 17.26c-.24 0-.48-.01-.72-.04C6.62 18.7 8.17 19.6 9.95 19.6c7.14 0 11.06-5.92 11.06-11.06v-.5c.76-.55 1.41-1.24 1.93-2.02-.7.31-1.45.52-2.23.62z" />
                      </svg>
                    </a>
                  )}
                  {site.social.instagram && (
                    <a
                      className="text-gray-300 hover:text-white"
                      href={site.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.5-.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
            <p>{site.copyright || `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}