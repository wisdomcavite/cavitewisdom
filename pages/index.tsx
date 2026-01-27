import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to CaviteWisdom</h1>
          <p className="text-xl text-gray-600">Your trusted source for local news and information</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide accurate, timely, and relevant news coverage that serves the Cavite community. 
              We are committed to delivering unbiased journalism that informs, educates, and empowers 
              our readers to make informed decisions about their community and beyond.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading digital newspaper platform in Cavite, fostering an informed and 
              engaged community through quality journalism, transparency, and accessibility. 
              We envision a future where every citizen has access to reliable local news.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}