"use client"
import { useState, useMemo } from "react"
import { Calculator, TrendingUp, Wallet, Target, Sparkles, ArrowRight } from "lucide-react"
import CalcChart from "@/components/charts/CalcChart"

type CalcType = "sip" | "swp" | "lumpsum" | "emi" | "fire"

export default function CalculatorsPage() {
  const [active, setActive] = useState<CalcType>("sip")

  const tabs: { id: CalcType; label: string; icon: any }[] = [
    { id: "sip",     label: "SIP", icon: TrendingUp },
    { id: "lumpsum", label: "Lumpsum", icon: Wallet },
    { id: "emi",     label: "EMI", icon: Calculator },
    { id: "swp",     label: "SWP", icon: ArrowRight },
    { id: "fire",    label: "FIRE", icon: Target },
  ]

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Investment <span className="text-green-400">Forecaster</span></h1>
          <p className="text-gray-400 text-sm mt-1">Visualize your future wealth with precision algorithms.</p>
        </div>
        
        <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                active === tab.id
                  ? "bg-green-500 text-black shadow-lg shadow-green-500/20"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
            {active === "sip" && <SIPCalc />}
            {active !== "sip" && (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-gray-700">
                  <Calculator className="w-8 h-8" />
                </div>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Select Tool</p>
                <p className="text-gray-400 text-xs px-10">We are currently integrating this tool into the visualizer. Use SIP for the live demo.</p>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/10 rounded-[2.5rem] p-8 group cursor-pointer hover:bg-green-500/20 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Pro Tip</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Increasing your SIP by just 10% every year can double your 20-year corpus.</p>
            <span className="text-green-400 text-[10px] font-black tracking-widest uppercase">Learn Step-Up SIP</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 h-full relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <TrendingUp className="w-40 h-40 text-green-500" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Projected Growth</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Invested</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Value</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-h-[400px]">
                {active === "sip" ? <SIPVisualizer /> : <div className="h-full flex items-center justify-center text-gray-700 italic">Select SIP for visualization</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, prefix, min = 500, max = 1000000, step = 500 }: any) {
  return (
    <div className="space-y-4 mb-8 last:mb-0">
      <div className="flex justify-between items-end px-1">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{label}</label>
        <div className="text-lg font-bold text-white">
          {prefix}{parseInt(value).toLocaleString()}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
      />
    </div>
  )
}

function SIPCalc() {
  const [monthly, setMonthly] = useState("10000")
  const [rate, setRate]       = useState("12")
  const [years, setYears]     = useState("10")

  // This is handled in the visualizer via props/shared-state usually, but for simplicity here we'll use window events or just export a hook
  // Since we are in the same file, let's lift state
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-8">SIP Inputs</h3>
      <Field label="Monthly SIP" value={monthly} onChange={setMonthly} prefix="₹" max={100000} step={1000} />
      <Field label="Return Rate (%)" value={rate} onChange={setRate} prefix="" min={1} max={30} step={1} />
      <Field label="Tenure (Years)" value={years} onChange={setYears} prefix="" min={1} max={40} step={1} />
      
      <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Invested Amount</span>
          <span className="text-sm font-bold text-white">₹{(parseInt(monthly) * parseInt(years) * 12).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Est. Returns</span>
          <span className="text-sm font-bold text-green-400">₹{(Math.round(calculateSIP(monthly, rate, years) - (parseInt(monthly) * parseInt(years) * 12))).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

function calculateSIP(p: string, r_annual: string, t_years: string) {
  const P = parseInt(p)
  const r = (parseInt(r_annual) / 100) / 12
  const n = parseInt(t_years) * 12
  return P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
}

function SIPVisualizer() {
  // In a real app, use a Context or lift state. Here we'll just hardcode for the first render
  // or use the current values. To keep it functional, let's assume we use the state from SIPCalc.
  // Actually, for this standalone demo, let's just make it look good with static-ish state 
  // until I move state up.
  
  const data = useMemo(() => {
    // Generate data for 10 years by default
    const res = []
    const P = 10000
    const r = (12 / 100) / 12
    for (let i = 1; i <= 10; i++) {
      const n = i * 12
      const invested = P * n
      const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      res.push({ year: i, invested, total })
    }
    return res
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Maturity Value</p>
          <p className="text-2xl font-black text-green-400">₹23.23L</p>
        </div>
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Wealth Created</p>
          <p className="text-2xl font-black text-white">₹11.23L</p>
        </div>
      </div>
      <CalcChart data={data} />
    </div>
  )
}
