import Layout from '../components/Layout'
import NewspaperCard from '../components/NewspaperCard'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'

interface Newspaper {
  filename: string
  title: string
  date: string
}

interface NewspapersPageProps {
  newspapers: Newspaper[]
}

export default function Newspapers({ newspapers }: NewspapersPageProps) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Newspapers</h1>
          <p className="text-xl text-gray-600">Browse our collection of published newspapers</p>
        </div>
        
        {newspapers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No newspapers available yet. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newspapers.map((newspaper, index) => (
              <NewspaperCard
                key={index}
                filename={newspaper.filename}
                title={newspaper.title}
                date={newspaper.date}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const newspapersDir = path.join(process.cwd(), 'public', 'newspapers')
  let newspapers: Newspaper[] = []

  try {
    const files = fs.readdirSync(newspapersDir)
    
    newspapers = files
      .filter(file => file.toLowerCase().endsWith('.pdf'))
      .map(filename => {
        const stats = fs.statSync(path.join(newspapersDir, filename))
        const nameWithoutExt = path.parse(filename).name
        
        return {
          filename,
          title: nameWithoutExt.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          date: stats.mtime.toLocaleDateString()
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.log('Newspapers directory not found or empty')
  }

  return {
    props: {
      newspapers
    }
  }
}