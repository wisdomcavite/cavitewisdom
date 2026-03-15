import { useState } from 'react'

interface NewspaperCardProps {
  filename: string
  title: string
  date: string
}

export default function NewspaperCard({ filename, title, date }: NewspaperCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const basePath = process.env.NODE_ENV === 'production' ? '/cavitewisdom' : ''
  const filePath = `${basePath}/newspapers/${encodeURIComponent(filename)}`

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[3/4] bg-gray-100 relative flex flex-col items-center justify-center gap-2">
          <div className="text-6xl">📄</div>
          <p className="text-sm text-gray-500">PDF Document</p>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">📖</span>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-gray-800 text-sm truncate">{title}</h3>
          {date && <p className="text-xs text-gray-500 mt-1">{date}</p>}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex justify-between items-center px-6 py-3 text-white" onClick={e => e.stopPropagation()}>
            <h3 className="font-semibold">{title}</h3>
            <button onClick={() => setIsOpen(false)} className="text-3xl hover:text-gray-300">×</button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <embed
              src={filePath}
              type="application/pdf"
              className="w-full h-full rounded"
            />
          </div>
        </div>
      )}
    </>
  )
}
