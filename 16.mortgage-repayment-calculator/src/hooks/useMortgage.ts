import { useState } from "react"
import type { FormData, FormErrors } from "../types"

export const useMortgage = () => {

  const [formData, setFormData] = useState<FormData>({
    amount: "",
    term: "",
    rate: "",
    type: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const [totalCheck, setTotalCheck] = useState(0)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.amount.trim()) {
      newErrors.amount = "This field is required"
    }

    if (!formData.term.trim()) {
      newErrors.term = "This field is required"
    }

    if (!formData.rate.trim()) {
      newErrors.rate = "This field is required"
    }

    if (!formData.type.trim()) {
      newErrors.type = "This field is required"
    }

    return newErrors
  }

  function calculateRepayment(amount: number, rate: number, years: number) {
    const r = rate / 100 / 12
    const n = years * 12
    setTotalCheck(amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
  }

  function calculateInterestOnly(amount: number, rate: number) {
    setTotalCheck((amount * rate) / 100 / 12)
  }

  function resetForm() {
    setFormData({
      amount: "",
      term: "",
      rate: "",
      type: ""
    })

    setTotalCheck(0)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (formData.type === "repayment") {
      calculateRepayment(+formData.amount, +formData.term, +formData.rate)
    }
    else {
      calculateInterestOnly(+formData.amount, +formData.term)
    }

    setErrors({})
  }

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    totalCheck,
    resetForm
  }
}
