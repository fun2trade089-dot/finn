import { createServerSupabaseClient } from "@/lib/supabase-server"
import { 
  TrendingUp, 
  Wallet, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Search
} from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", user?.id)
    .single()

  const firstName = profile?.full_name?.split(" ")[0] ?? "there"

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Welcome back, <span className="text-green-400">{firstName}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">Here's what's happening with your wealth today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-green-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-green-500/20">
            <Plus className="w-4 h-4" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FinScore Card */}
        <div className="relative group overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 transition-all hover:border-green-500/30">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-20 h-20 text-green-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">FinScore</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-black text-white">742</p>
              <span className="text-green-400 text-xs font-bold mb-1.5 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> +12
              </span>
            </div>
            <p className="text-gray-500 text-[10px] mt-2 font-medium">Updated 2 days ago</p>
            <button className="mt-6 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-xs font-bold text-gray-300 transition-colors">
              VIEW DETAILED ANALYSIS
            </button>
          </div>
        </div>

        {/* Portfolio Card */}
        <div className="relative group overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 transition-all hover:border-emerald-500/30">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp className="w-20 h-20 text-emerald-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Wealth</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-black text-white">₹12.4L</p>
              <span className="text-emerald-400 text-xs font-bold mb-1.5 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> +2.4%
              </span>
            </div>
            <p className="text-gray-500 text-[10px] mt-2 font-medium">Daily profit: ₹4,200</p>
            <button className="mt-6 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-xs font-bold text-gray-300 transition-colors">
              INVEST MORE
            </button>
          </div>
        </div>

        {/* Expenses Card */}
        <div className="relative group overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 transition-all hover:border-red-500/30">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet className="w-20 h-20 text-red-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Budget</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-black text-white">₹42,000</p>
              <span className="text-red-400 text-xs font-bold mb-1.5 flex items-center">
                <ArrowDownRight className="w-3 h-3 mr-0.5" /> 84%
              </span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded-full mt-3">
              <div className="bg-red-500 h-full w-[84%] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            </div>
            <button className="mt-6 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-xs font-bold text-gray-300 transition-colors">
              VIEW TRANSACTIONS
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions & Market */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Market Trends</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { s: 'NIFTY 50', v: '22,419.40', c: '+0.85%', up: true },
                { s: 'SENSEX', v: '73,876.82', c: '+0.76%', up: true },
                { s: 'RELIANCE', v: '2,987.20', c: '-0.12%', up: false },
                { s: 'HDFC BANK', v: '1,442.10', c: '+1.20%', up: true },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-2xl">
                  <p className="text-[10px] font-bold text-gray-500 mb-1">{item.s}</p>
                  <p className="text-sm font-bold text-white mb-1">{item.v}</p>
                  <span className={`text-[10px] font-bold ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                    {item.c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/10 rounded-3xl group cursor-pointer hover:bg-green-500/20 transition-all">
              <h4 className="text-lg font-bold text-white mb-2">AI Advisory</h4>
              <p className="text-gray-400 text-sm mb-4">Our AI suggests rebalancing your portfolio to increase equity exposure by 5%.</p>
              <span className="text-green-400 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                READ REPORT <ArrowUpRight className="ml-1 w-3 h-3" />
              </span>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10 rounded-3xl group cursor-pointer hover:bg-blue-500/20 transition-all">
              <h4 className="text-lg font-bold text-white mb-2">Savings Goal</h4>
              <p className="text-gray-400 text-sm mb-4">You are ₹12,000 away from your "Europe Trip" goal. Keep it up!</p>
              <span className="text-blue-400 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                TRACK GOAL <ArrowUpRight className="ml-1 w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Regional Info & News */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <TrendingUp className="w-32 h-32 text-black" />
            </div>
            <h3 className="text-2xl font-black text-black mb-2 leading-tight">Asia Region <br />Data Center.</h3>
            <p className="text-black/70 text-sm mb-6 font-medium">Your data is hosted locally in Mumbai for ultra-low latency and compliance.</p>
            <div className="flex items-center gap-2 bg-black/10 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-black uppercase tracking-widest">
              Live: Mumbai (ap-south-1)
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Regional News</h3>
            <div className="space-y-4">
              {[
                "RBI keeps repo rate unchanged at 6.5%",
                "Gold prices hit record high amid global cues",
                "New tax regime to be default from April 1st",
              ].map((news, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{news}</p>
                  <div className="w-full h-[1px] bg-white/5 mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
