// Custom Hook
import { useMortgage } from "./hooks/useMortgage"

// Components
import { Form } from "./components/Form"
import { Results } from "./components/Results"


function App() {

  const { formData, handleChange, handleSubmit, errors, totalCheck, resetForm } = useMortgage()

  return (
    <main className="grid md:grid-cols-2 max-w-5xl md:rounded-3xl overflow-hidden bg-white">
      <section className="md:p-12 p-6">

        <header className="flex justify-between flex-col md:items-center mb-8 md:flex-row gap-2 items-start">
          <h1 className="text-slate-90 text-2xl font-bold">Mortgage Calculator</h1>
          <button
            className="bg-slate-900 text-white cursor-pointer p-2 text-sm duration-150 transition rounded-xl hover:bg-slate-950"
            aria-label="Clear calculator content"
            onClick={resetForm}
          >
            Clear All
          </button>
        </header> 

        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </section>

      <Results
        totalCheck={totalCheck}
      />
    </main>
  )
}

export default App
