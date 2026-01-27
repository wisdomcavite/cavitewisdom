import { useState } from 'react'

interface NewspaperCardProps {
  filename: string
  title: string
  date: string
}

export default function NewspaperCard({ filename, title, date }: NewspaperCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isPdf = filename.toLowerCase().endsWith('.pdf')
  const imagePath = `/newspapers/${filename}`

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
          {isPdf ? (
            <div className="text-center p-4">
              <div className="text-6xl text-red-600 mb-2">📄</div>
              <p className="text-sm text-gray-600">PDF Document</p>
            </div>
          ) : (
            <img 
              src={imagePath} 
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              {isPdf ? (
                <iframe 
                  src={imagePath}
                  className="w-full h-[70vh]"
                  title={title}
                />
              ) : (
                <img 
                  src={imagePath} 
                  alt={title}
                  className="max-w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}