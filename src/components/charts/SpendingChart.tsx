'use client'

import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts'

const data = [
  { name: 'Housing', value: 15000, color: '#10b981' },
  { name: 'Food', value: 8000, color: '#34d399' },
  { name: 'Transport', value: 4500, color: '#6ee7b7' },
  { name: 'Shopping', value: 6000, color: '#059669' },
  { name: 'Other', value: 3500, color: '#a7f3d0' },
]

export default function SpendingChart() {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid #ffffff10', 
              borderRadius: '12px',
              fontSize: '12px',
              color: '#fff'
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
