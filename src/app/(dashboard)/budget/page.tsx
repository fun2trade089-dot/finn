import SpendingChart from "@/components/charts/SpendingChart"
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Plus, 
  Calendar,
  Utensils,
  Car,
  ShoppingBag,
  Home,
  MoreHorizontal,
  ChevronRight
} from "lucide-react"

export default function BudgetPage() {
  const transactions = [
    { name: 'Grocery Store', cat: 'Food', amount: '₹1,250', date: '2 hours ago', icon: Utensils, type: 'expense' },
    { name: 'Monthly Salary', cat: 'Income', amount: '₹75,000', date: 'Yesterday', icon: ArrowUpRight, type: 'income' },
    { name: 'Uber Ride', cat: 'Transport', amount: '₹450', date: 'Oct 12', icon: Car, type: 'expense' },
    { name: 'Amazon Shopping', cat: 'Shopping', amount: '₹3,400', date: 'Oct 11', icon: ShoppingBag, type: 'expense' },
    { name: 'Rent Payment', cat: 'Housing', amount: '₹15,000', date: 'Oct 10', icon: Home, type: 'expense' },
  ]

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Financial <span className="text-green-400">Command Center</span></h1>
          <p className="text-gray-400 text-sm mt-1">Track every rupee and optimize your cashflow with AI.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>October 2024</span>
          </div>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded-2xl text-sm transition-all active:scale-95 shadow-lg shadow-green-500/20">
            <Plus className="w-4 h-4" />
            New Transaction
          </button>
        </div>
      </div>

      {/* Cashflow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-[2.5rem] p-8 text-black group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Wallet className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Total Balance</p>
            <p className="text-4xl font-black mb-6 tracking-tighter">₹2,42,500</p>
            <div className="flex items-center gap-2 bg-black/10 w-fit px-3 py-1 rounded-full text-[10px] font-bold">
              <ArrowUpRight className="w-3 h-3" /> +₹12k this month
            </div>
          </div>
        </div>

        {/* Income Card */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group hover:border-green-500/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monthly Income</p>
              <p className="text-2xl font-black text-white tracking-tight">₹85,000</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 h-1 rounded-full">
            <div className="bg-green-500 h-full w-[100%] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          </div>
        </div>

        {/* Expense Card */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group hover:border-red-500/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <ArrowDownRight className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monthly Expenses</p>
              <p className="text-2xl font-black text-white tracking-tight">₹42,500</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 h-1 rounded-full">
            <div className="bg-red-500 h-full w-[50%] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction History */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <button className="text-xs font-bold text-green-400 hover:underline tracking-wider uppercase">EXPORT CSV</button>
            </div>
            
            <div className="space-y-2">
              {transactions.map((txn, i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-[1.5rem] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      txn.type === 'income' ? 'bg-green-500/10' : 'bg-gray-800/50'
                    }`}>
                      <txn.icon className={`w-5 h-5 ${
                        txn.type === 'income' ? 'text-green-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">{txn.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{txn.cat} • {txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-black ${
                      txn.type === 'income' ? 'text-green-400' : 'text-white'
                    }`}>
                      {txn.type === 'income' ? '+' : '-'}{txn.amount}
                    </p>
                    <ChevronRight className="w-4 h-4 text-gray-800 ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics & Insights */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-8">Spending Analysis</h2>
            <SpendingChart />
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/10 rounded-[2.5rem] p-8 group cursor-pointer hover:bg-indigo-500/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                <MoreHorizontal className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-lg font-bold text-white">AI Suggestion</h4>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your "Food" spending is 12% higher than last month. Switching to weekly meal prep could save you ₹4,500/mo.
            </p>
            <span className="text-indigo-400 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform uppercase tracking-widest">
              OPTIMIZE BUDGET <ArrowUpRight className="ml-1 w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
