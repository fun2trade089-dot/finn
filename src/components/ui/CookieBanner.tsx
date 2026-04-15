'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-300 max-w-4xl">
        We use cookies and similar technologies to improve your experience, measure analytics, and secure our application. 
        By clicking "Accept All", you consent to our use of cookies.
        <div className="mt-1 space-x-2">
          <a href="/privacy" className="text-green-400 hover:underline">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="/terms" className="text-green-400 hover:underline">Terms of Service</a>
        </div>
      </div>
      <div className="flex gap-3 shrink-0 w-full md:w-auto">
        <button 
          onClick={() => setShow(false)} 
          className="flex-1 md:flex-none px-4 py-2 border border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors text-sm font-semibold"
        >
          Reject Non-Essential
        </button>
        <button 
          onClick={accept} 
          className="flex-1 md:flex-none px-4 py-2 bg-green-500 text-black rounded-xl hover:bg-green-400 transition-colors text-sm font-bold shadow-lg shadow-green-500/20"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
