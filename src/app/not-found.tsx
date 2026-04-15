import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center mb-8 border border-red-500/20">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">404</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-md">
        The financial insight you are looking for seems to have been misplaced or doesn't exist.
      </p>
      <Link 
        href="/"
        className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-500/20"
      >
        RETURN TO DASHBOARD
      </Link>
    </div>
  )
}
