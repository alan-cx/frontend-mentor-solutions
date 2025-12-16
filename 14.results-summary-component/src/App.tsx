import { Result } from "./components/Result"
import { Summary } from "./components/Summary"

function App() {

  return (
    <main className="bg-white md:rounded-3xl overflow-hidden grid md:grid-cols-2 max-w-3xl">
      <Result/>
      <Summary/>
    </main>
  )
}

export default App