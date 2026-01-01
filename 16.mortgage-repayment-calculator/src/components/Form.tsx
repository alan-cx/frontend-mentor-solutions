import CalculatorIcon from "../assets/icon-calculator.svg"
import type { FormData, FormErrors } from "../types"

type FormProps = {
  formData: FormData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  errors: FormErrors
}

export const Form = ({ formData, handleChange, handleSubmit, errors } : FormProps) => {

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount" className="text-slate-700">Mortgage Amount</label>
        <div className="border mt-2 border-slate-900 border-solid flex justify-between items-center rounded-lg overflow-hidden">
          <span className={`${errors.amount ? 'bg-custom-red text-white' : 'bg-slate-300 text-slate-900'} py-4 px-5 font-bold`}>$</span>
          <input type="number" id="amount" name="amount" className="p-4 w-full outline-none border-none" onChange={handleChange} value={formData.amount}/>
        </div>
        { errors.amount && <p className="mt-3 text-custom-red">{errors.amount}</p> }
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="rate" className="text-slate-700">Mortgage Term</label>
          <div className="border mt-2 border-slate-900 border-solid flex justify-between items-center rounded-lg overflow-hidden">
            <input type="number" id="rate" name="rate" className="p-4 w-full outline-none border-none" onChange={handleChange} value={formData.rate}/>
            <span className={`${errors.rate ? 'bg-custom-red text-white' : 'bg-slate-300 text-slate-900'} py-4 px-5 font-bold`}>Years</span>
          </div>
          { errors.rate && <p className="mt-3 text-custom-red">{errors.term}</p> }
        </div>

        <div>
          <label htmlFor="term" className="text-slate-700">Interest Rate</label>
          <div className="border mt-2 border-slate-900 border-solid flex justify-between items-center rounded-lg overflow-hidden">
            <input type="number" id="term" name="term" className="p-4 w-full outline-none border-none" onChange={handleChange} value={formData.term}/>
            <span className={`${errors.rate ? 'bg-custom-red text-white' : 'bg-slate-300 text-slate-900'} py-4 px-5 font-bold`}>%</span>
          </div>
          { errors.term && <p className="mt-3 text-custom-red">{errors.term}</p> }
        </div>
      </div>

      <div className="space-y-3">
        <span className="text-slate-700">Mortgage Type</span>
        <div className="border border-slate-700 border-solid p-4 flex gap-2 mt-2 rounded-lg">
          <input type="radio" name="type" id="repayment" value="repayment" onChange={handleChange}/>
          <label htmlFor="repayment" className="font-bold text-slate-900 text-xl">Repayment</label>
        </div>
        <div className="border border-slate-700 border-solid p-4 flex gap-2 rounded-lg">
          <input type="radio" name="type" id="interest" value="interest" onChange={handleChange}/>
          <label htmlFor="interest" className="font-bold text-slate-900 text-xl">Interest Only</label>
        </div>
        { errors.type && <p className="mt-3 text-custom-red">{errors.type}</p> }
      </div>

      <div className="mt-8">
        <button className="flex items-center justify-center gap-2 py-3 px-4 bg-lime hover:bg-yellow-300 duration-150 transition text-slate-900 font-bold rounded-full cursor-pointer w-full">
          <img
            src={CalculatorIcon}
            alt="Calculator icon"
          />
          Calculate Repayments
        </button>
      </div>

    </form>
  )
}
