export type FormData = {
  amount: string
  term: string
  rate: string
  type: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>
