import Empty from "../assets/illustration-empty.svg"

type ResultsProps = {
  totalCheck: number
}


export const Results = ({totalCheck} : ResultsProps) => {
  return (
    <>
      { totalCheck ? (
        <section className="bg-slate-900 text-white md:rounded-bl-[7rem] flex flex-col items-start justify-center gap-2 p-6 md:p-12">
          <h2 className="font-bold text-2xl">Your results</h2>
          <p className="text-slate-500">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
          <div className="p-6 bg-slate-900 border-t-3 mt-3 border-lime w-full shadow rounded-xl">
            <p className="text-slate-500">Your monthly repayments</p>
            <span className="font-bold text-3xl text-lime">${totalCheck}</span>
            <div className="border my-4 border-slate-500 w-full"></div>
            <p className="text-slate-500">Total you'll repay over the term</p>
            <span className="text-white"></span>
          </div>
        </section>
      ) : (
        <section className="bg-slate-900 text-white md:rounded-bl-[7rem] flex flex-col items-center text-center justify-center gap-2 p-6 md:p-12">
          <img src={Empty} alt="Empty illustrations" />
          <h2 className="font-bold text-2xl">Results shown here</h2>
          <p className="text-slate-700">Complete the form en click "calculate repayments" to see what your monthly repayments would be.</p>
        </section>   
      )}
    </>
  )
}

 