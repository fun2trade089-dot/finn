import MarketChart from "@/components/charts/MarketChart"
import { 
  TrendingUp, 
  Search, 
  ArrowUpRight, 
  ArrowDownRight, 
  LayoutGrid, 
  ListFilter,
  Star,
  Plus
} from "lucide-react"

export default function MarketPage() {
  const indices = [
    { name: 'NIFTY 50', value: '22,419.40', change: '+189.15', pct: '+0.85%', up: true },
    { name: 'SENSEX', value: '73,876.82', change: '+556.32', pct: '+0.76%', up: true },
  ]

  const watchlist = [
    { s: 'RELIANCE', v: '2,987.20', c: '-0.12%', up: false, cap: '18.4L Cr' },
    { s: 'TCS', v: '3,842.15', c: '+1.45%', up: true, cap: '14.2L Cr' },
    { s: 'HDFC BANK', v: '1,442.10', c: '+1.20%', up: true, cap: '12.1L Cr' },
    { s: 'INFY', v: '1,623.40', c: '-2.15%', up: false, cap: '6.8L Cr' },
    { s: 'ICICI BANK', v: '1,084.50', c: '+0.85%', up: true, cap: '7.6L Cr' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Market <span className="text-green-400">Intelligence</span></h1>
          <p className="text-gray-400 text-sm mt-1">Real-time market insights and personalized watchlist.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-green-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search stocks, MF, ETFs..." 
              className="bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all w-80"
            />
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-colors">
            <ListFilter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Indices Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {indices.map((idx, i) => (
          <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2.5rem] p-8 group hover:border-green-500/30 transition-all overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp className="w-32 h-32 text-green-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{idx.name}</span>
                <span className={`flex items-center gap-1 text-xs font-bold ${idx.up ? 'text-green-400' : 'text-red-400'}`}>
                  {idx.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {idx.change} ({idx.pct})
                </span>
              </div>
              <p className="text-5xl font-black text-white tracking-tighter mb-4">{idx.value}</p>
              <MarketChart />
            </div>
          </div>
        ))}
      </div>

      {/* Watchlist Section */}
      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white">Your Watchlist</h2>
            <div className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Live Tracking</span>
            </div>
          </div>
          <button className="text-xs font-bold text-green-400 hover:underline tracking-wider uppercase">VIEW ALL ASSETS</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Symbol</th>
                <th className="pb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Price</th>
                <th className="pb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Change</th>
                <th className="pb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Market Cap</th>
                <th className="pb-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {watchlist.map((item, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center font-bold text-xs text-gray-400 group-hover:text-white transition-colors">
                        {item.s[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{item.s}</p>
                        <p className="text-[10px] text-gray-500 font-medium tracking-wide">NSE • Equity</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 font-bold text-white text-sm">₹{item.v}</td>
                  <td className={`py-5 text-right font-bold text-sm ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                    {item.c}
                  </td>
                  <td className="py-5 text-right font-medium text-gray-400 text-sm">{item.cap}</td>
                  <td className="py-5 text-right">
                    <button className="p-2 opacity-0 group-hover:opacity-100 bg-white/5 border border-white/10 rounded-xl hover:bg-green-500 hover:text-black transition-all">
                      <Plus className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
