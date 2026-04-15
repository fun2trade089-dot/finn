export type Plan = 'free' | 'pro' | 'premium'
export type AssetType = 'stock' | 'mf' | 'gold' | 'bond' | 'etf'
export type TxnType = 'income' | 'expense'

export interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  plan: Plan
  created_at: string
}

export interface WatchlistItem {
  id: string
  user_id: string
  symbol: string
  name: string | null
  asset_type: AssetType
  exchange: string | null
  added_at: string
}

export interface Expense {
  id: string
  user_id: string
  type: TxnType
  category: string
  amount: number
  note: string | null
  txn_date: string
  created_at: string
}

export interface FinScore {
  id: string
  user_id: string
  score: number
  answers: Record<string, unknown>
  advice: string | null
  scored_at: string
}

export interface Subscription {
  id: string
  user_id: string
  plan_type: Plan
  status: 'active' | 'cancelled' | 'expired'
  razorpay_sub_id: string | null
  starts_at: string
  ends_at: string | null
}