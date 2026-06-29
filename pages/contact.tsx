import Layout from '../components/Layout'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const site = require('../site.config')

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">{site.contact.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">{site.contact.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">{site.contact.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mission</h3>
                  <p className="text-gray-600">{site.mission}</p>
                </div>
                {site.social && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Follow Us</h3>
                    <div className="mt-2 flex items-center gap-3">
                      {site.social.facebook && (
                        <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.1 5.66 21.3 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.3 22 17.1 22 12.07z" />
                          </svg>
                        </a>
                      )}
                      {site.social.twitter && (
                        <a href={site.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-sky-500 hover:text-sky-700">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.1 1.53-1.9-.68.4-1.42.7-2.22.86C18.7 4.5 17.8 4 16.8 4c-1.54 0-2.79 1.26-2.79 2.8 0 .22.02.43.07.64-2.32-.12-4.38-1.23-5.76-2.94-.24.42-.38.9-.38 1.41 0 .97.49 1.83 1.24 2.33-.46-.01-.9-.14-1.28-.36v.04c0 1.36.97 2.5 2.25 2.76-.24.06-.5.09-.76.09-.19 0-.37-.02-.54-.05.37 1.15 1.44 1.99 2.7 2.01C8.8 16.6 7.4 17.26 5.9 17.26c-.24 0-.48-.01-.72-.04C6.62 18.7 8.17 19.6 9.95 19.6c7.14 0 11.06-5.92 11.06-11.06v-.5c.76-.55 1.41-1.24 1.93-2.02-.7.31-1.45.52-2.23.62z" />
                          </svg>
                        </a>
                      )}
                      {site.social.instagram && (
                        <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-700">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.5-.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}