import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sayfa Bulunamadı</h2>
      <p className="mb-4">Aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  )
}
