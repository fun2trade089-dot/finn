import { Search, Flame, Clock, Bookmark, ExternalLink, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const categories = ["All", "Markets", "Economy", "Crypto", "Personal Finance", "Startups"]
  
  const trending = [
    { title: "RBI repo rate decision expected tomorrow", views: "12k views" },
    { title: "Nifty hits new all-time high", views: "8.5k views" },
    { title: "Tax savings tips for FY 2024-25", views: "6.2k views" }
  ]

  const articles = [
    {
      category: "Markets",
      title: "Reliance Industries Q4 Results: Net profit jumps 15% to ₹21,243 crore",
      source: "Financial Express",
      time: "2 hours ago",
      image: "bg-blue-500/20",
      excerpt: "The conglomerate reported a strong operational performance across its O2C, retail, and telecom businesses, beating street estimates.",
      icon: "📈"
    },
    {
      category: "Economy",
      title: "Inflation eases to 11-month low of 4.83% in April",
      source: "Mint",
      time: "5 hours ago",
      image: "bg-emerald-500/20",
      excerpt: "Retail inflation in India eased further in April, driven by a continued moderation in food prices, giving the central bank room to maneuver.",
      icon: "🏦"
    },
    {
      category: "Crypto",
      title: "Bitcoin surges past $65,000 as institutional inflows return",
      source: "CoinDesk",
      time: "8 hours ago",
      image: "bg-purple-500/20",
      excerpt: "The world's largest cryptocurrency rebounded strongly after a brief consolidation, pushed by renewed buying from major spot ETFs.",
      icon: "₿"
    },
    {
      category: "Personal Finance",
      title: "Why SIPs remain the best vehicle for long-term wealth creation",
      source: "Economic Times",
      time: "12 hours ago",
      image: "bg-orange-500/20",
      excerpt: "Market volatility shouldn't deter retail investors. Continuing Systematic Investment Plans ensures rupee cost averaging.",
      icon: "💰"
    },
    {
      category: "Startups",
      title: "Fintech funding shows signs of revival in Q2",
      source: "YourStory",
      time: "1 day ago",
      image: "bg-pink-500/20",
      excerpt: "After a prolonged funding winter, early-stage fintech startups are seeing renewed interest from venture capitalists.",
      icon: "🚀"
    }
  ]

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Market <span className="text-green-400">Intelligence</span></h1>
          <p className="text-gray-400 text-sm mt-1">Curated financial news, analysis, and trending insights.</p>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-green-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search topics, symbols..." 
            className="bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all w-full md:w-80"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`whitespace-nowrap px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              i === 0
                ? "bg-green-500 text-black shadow-lg shadow-green-500/20"
                : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              Latest Updates
            </h2>
          </div>

          <div className="space-y-6">
            {articles.map((article, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 hover:border-green-500/30 transition-all cursor-pointer backdrop-blur-sm flex flex-col md:flex-row gap-6">
                <div className={`w-full md:w-40 h-40 rounded-2xl ${article.image} border border-white/5 flex items-center justify-center shrink-0`}>
                  <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">{article.icon}</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest">{article.category}</span>
                      <span className="text-[10px] font-medium text-gray-500">{article.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-gray-500">{article.source}</span>
                    <div className="flex items-center gap-3 text-gray-500">
                      <button className="hover:text-green-400 transition-colors"><Bookmark className="w-4 h-4" /></button>
                      <button className="hover:text-green-400 transition-colors"><ExternalLink className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Trending Box */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Flame className="w-32 h-32 text-orange-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Flame className="w-5 h-5 text-orange-500" />
                Trending Now
              </h3>
              <div className="space-y-6">
                {trending.map((item, i) => (
                  <div key={i} className="group/item cursor-pointer">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-white/10 group-hover/item:text-orange-500/20 transition-colors">0{i + 1}</span>
                      <div>
                        <h4 className="text-sm font-bold text-gray-300 group-hover/item:text-white transition-colors mb-1 leading-snug">{item.title}</h4>
                        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">{item.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/10 rounded-[2.5rem] p-8">
            <h4 className="text-lg font-bold text-white mb-2">Daily Digest</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Get the top 5 financial stories delivered to your inbox every morning before market open.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="bg-green-500 hover:bg-green-400 text-black p-2.5 rounded-xl transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
