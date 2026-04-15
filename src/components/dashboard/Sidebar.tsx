'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  Calculator, 
  Target, 
  Newspaper,
  LogOut,
  ChevronRight
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard',   href: '/dashboard',    icon: LayoutDashboard },
  { label: 'Market',      href: '/market',       icon: TrendingUp },
  { label: 'Budget',      href: '/budget',       icon: Wallet },
  { label: 'Calculators', href: '/calculators',  icon: Calculator },
  { label: 'FinScore',    href: '/finscore',     icon: Target },
  { label: 'News',        href: '/news',         icon: Newspaper },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#030712] border-r border-white/5 flex flex-col z-50">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20 text-black font-bold text-xl">
            S
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Finnbase
          </h1>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold ml-11">
          AI Companion
        </p>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-green-500/10 text-green-400 font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-green-400' : 'text-gray-500 group-hover:text-white transition-colors'}`} />
                {item.label}
              </div>
              {isActive && (
                <div className="w-1 h-4 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/10 rounded-2xl p-4 mb-4">
          <p className="text-[10px] font-black text-green-400 uppercase tracking-[0.2em] mb-1">Full Access</p>
          <p className="text-xs text-gray-400 leading-relaxed">You have unlimited access to all AI financial tools.</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all group"
        >
          <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
