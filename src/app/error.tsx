'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Bir şeyler yanlış gitti!</h2>
      <button
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        onClick={() => reset()}
      >
        Tekrar Dene
      </button>
    </div>
  )
}
