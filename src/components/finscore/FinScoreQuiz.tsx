'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  Wallet,
  Calculator,
  Target
} from 'lucide-react'

const questions = [
  {
    id: 'income',
    title: 'Monthly Income',
    description: 'What is your average post-tax monthly income?',
    options: [
      { label: '< ₹30,000', value: 10, advice: 'Focus on skill-building to increase primary income.' },
      { label: '₹30k - ₹75k', value: 20, advice: 'Good base, start automating your savings.' },
      { label: '₹75k - ₹2L', value: 30, advice: 'Explore advanced tax-saving instruments.' },
      { label: '> ₹2L', value: 40, advice: 'Diversify into high-yield alternative investments.' },
    ]
  },
  {
    id: 'savings_rate',
    title: 'Monthly Savings %',
    description: 'How much of your income do you save/invest each month?',
    options: [
      { label: '< 10%', value: 5, advice: 'Try the 50/30/20 rule to boost savings.' },
      { label: '10% - 20%', value: 15, advice: 'Good, aim for 30% to reach financial freedom faster.' },
      { label: '20% - 40%', value: 25, advice: 'Excellent! Your discipline is paying off.' },
      { label: '> 40%', value: 35, advice: 'Financial independence is within your reach.' },
    ]
  },
  {
    id: 'emergency_fund',
    title: 'Emergency Fund',
    description: 'Do you have 6 months of expenses saved in a liquid fund?',
    options: [
      { label: 'Not started', value: 0, advice: 'Priority #1: Build an emergency fund immediately.' },
      { label: '1-2 months', value: 10, advice: 'You are on the right track, keep adding to it.' },
      { label: '3-5 months', value: 20, advice: 'Almost there! You are more secure than most.' },
      { label: '6+ months', value: 30, advice: 'Perfect. You have a solid financial safety net.' },
    ]
  },
  {
    id: 'debt',
    title: 'Debt Status',
    description: 'How would you describe your current debt (loans/credit cards)?',
    options: [
      { label: 'High Interest Debt', value: -20, advice: 'Aggressively pay off credit card debt first.' },
      { label: 'Low Interest Loans', value: 10, advice: 'Manageable. Focus on prepayments if possible.' },
      { label: 'No Debt', value: 25, advice: 'Ideal! You can fully focus on wealth creation.' },
    ]
  }
]

export default function FinScoreQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isFinished, setIsFinished] = useState(false)

  const handleSelect = (value: number) => {
    const qId = questions[step].id
    setAnswers(prev => ({ ...prev, [qId]: value }))
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setIsFinished(true), 300)
    }
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const maxPossible = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.value)), 0)
  const normalizedScore = Math.max(0, Math.min(100, Math.round((totalScore / maxPossible) * 100)))

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 text-center"
      >
        <div className="relative inline-block mb-8">
          <svg className="w-48 h-48">
            <circle
              className="text-white/5"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="80"
              cx="96"
              cy="96"
            />
            <motion.circle
              className="text-green-500"
              strokeWidth="8"
              strokeDasharray={502}
              initial={{ strokeDashoffset: 502 }}
              animate={{ strokeDashoffset: 502 - (502 * normalizedScore) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="80"
              cx="96"
              cy="96"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-white">{normalizedScore}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">FinScore</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {normalizedScore > 80 ? "You're a Financial Guru!" : 
           normalizedScore > 50 ? "Solid Foundation!" : "Room for Growth!"}
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Based on your profile, we have generated a personalized roadmap to help you reach your goals.
        </p>

        <div className="space-y-4 text-left">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Top Insight</p>
              <p className="text-sm text-gray-200">
                You could potentially retire 4 years earlier by increasing your equity allocation by 10%.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="mt-10 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-500/20"
        >
          GO TO DASHBOARD
        </button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-green-400 uppercase tracking-[0.2em]">Step {step + 1} of {questions.length}</span>
          <span className="text-xs text-gray-500 font-medium">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-2">{questions[step].title}</h2>
          <p className="text-gray-400 mb-8">{questions[step].description}</p>

          <div className="grid grid-cols-1 gap-3">
            {questions[step].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option.value)}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all text-left"
              >
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{option.label}</span>
                <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white disabled:opacity-0 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === step ? 'bg-green-500' : 'bg-gray-800'}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Secure AI Analysis • No Data Sharing</p>
      </div>
    </div>
  )
}
