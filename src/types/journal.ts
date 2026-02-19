export type Direction = "LONG" | "SHORT"
export type TradeStatus = "OPEN" | "CLOSED"
export type Action = "buy" | "sell"

export type Leg = {
  leg_id: string
  price: number
  quantity: number
  date?: string
}

export type Trade = {
  trade_id: string
  symbol: string
  direction: Direction
  status: TradeStatus
  setup: string | null
  opened_at: string
  buy: Leg[]
  sell: Leg[]
  notes: string
}

export type Journal = {
  journal_id: string
  trades: Trade[]
}
