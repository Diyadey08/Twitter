export interface Campaign {
    creator: string
    donors: string[]
    donations: bigint[]
    title: string
    description: string
    goal: bigint
    deadline: bigint
    totalFunds: bigint
    completed: boolean
    cancelled: boolean
    contributorsCount: bigint
  }