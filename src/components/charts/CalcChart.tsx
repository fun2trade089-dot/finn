'use client'

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

interface ChartData {
  year: number
  invested: number
  total: number
}

export default function CalcChart({ data }: { data: ChartData[] }) {
  return (
    <div className="h-[300px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4b5563', fontSize: 10 }} 
            dy={10}
            label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: '#4b5563', fontSize: 10 }}
          />
          <YAxis hide={true} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid #ffffff10', 
              borderRadius: '16px',
              fontSize: '12px'
            }}
            formatter={(value: number) => [`₹${Math.round(value).toLocaleString()}`, '']}
          />
          <Area 
            type="monotone" 
            dataKey="total" 
            stroke="#22c55e" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorTotal)" 
            name="Total Value"
          />
          <Area 
            type="monotone" 
            dataKey="invested" 
            stroke="#3b82f6" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorInvested)" 
            name="Invested Amount"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
