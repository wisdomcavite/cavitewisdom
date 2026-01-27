import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About CaviteWisdom</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                CaviteWisdom is a dedicated digital newspaper platform serving the vibrant community of Cavite. 
                Founded with the mission to bridge the information gap in local journalism, we strive to deliver 
                accurate, timely, and relevant news that matters to our readers.
              </p>
              <p className="text-gray-700">
                Our team consists of experienced journalists, editors, and digital media professionals who are 
                passionate about community journalism and committed to upholding the highest standards of 
                editorial integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Provide comprehensive coverage of local news and events</li>
                <li>• Investigate issues that matter to the Cavite community</li>
                <li>• Offer a platform for community voices and perspectives</li>
                <li>• Deliver breaking news and updates in real-time</li>
                <li>• Support local businesses and initiatives through our coverage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700">
                We are committed to maintaining the trust our readers place in us by adhering to the principles 
                of accurate reporting, fairness, and transparency. Every story we publish undergoes rigorous 
                fact-checking and editorial review to ensure we meet the highest journalistic standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}