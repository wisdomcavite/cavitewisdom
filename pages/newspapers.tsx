import { useState } from 'react'
import Layout from '../components/Layout'
import NewspaperCard from '../components/NewspaperCard'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'

const PAGE_SIZE = 20

interface Newspaper {
  filename: string
  title: string
  date: string
  hasThumbnail: boolean
}

interface NewspapersPageProps {
  newspapers: Newspaper[]
}

export default function Newspapers({ newspapers }: NewspapersPageProps) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(newspapers.length / PAGE_SIZE)
  const paginated = newspapers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginated.map((newspaper, index) => (
                <NewspaperCard
                  key={index}
                  filename={newspaper.filename}
                  title={newspaper.title}
                  date={newspaper.date}
                  hasThumbnail={newspaper.hasThumbnail}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ‹ Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded ${p === page ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next ›
                </button>
              </div>
            )}
          </>
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
        const nameWithoutExt = path.parse(filename).name
        const dateMatch = nameWithoutExt.match(/\d{4}-\d{2}-\d{2}/)
        const date = dateMatch ? new Date(dateMatch[0]).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-').toUpperCase() : ''
        const title = nameWithoutExt.replace(/\s*-?\s*\d{4}-\d{2}-\d{2}/, '').trim()
        const hasThumbnail = fs.existsSync(path.join(newspapersDir, 'thumbnails', `${nameWithoutExt}.jpg`))

        return { filename, title, date, hasThumbnail }
      })
      .sort((a, b) => a.filename < b.filename ? 1 : -1)
  } catch (error) {
    console.log('Newspapers directory not found or empty')
  }

  return { props: { newspapers } }
}
