export interface Item {
  id: number
  deleted?: boolean
  type?: 'story' | 'comment' | 'poll' | 'pollopt' | 'job'
  by?: string
  time?: number
  text?: string
  dead?: boolean
  parent?: number
  poll?: number
  kids?: number[]
  url?: string
  score?: number
  title?: string
  parts?: number[]
  descendants?: number
}
