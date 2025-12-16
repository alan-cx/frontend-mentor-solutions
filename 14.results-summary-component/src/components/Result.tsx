export const Result = () => {
  return (
    <section className="flex flex-col gap-4 items-center text-center md:p-18 p-10 bg-violetBlue text-white">
      <p className="font-extrabold text-2xl text-LightLavender">Your result is</p>

      <div className="h-40 w-40 bg-slateBlue rounded-full flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-7xl">76</h1>
        <span className="font-extrabold text-LightLavender">of 100</span>
      </div>

      <h2 className="font-extrabold text-3xl">Great</h2>

      <p className="font-medium text-LightLavender">Your scored higher than 65% of the people who have taken the tests</p>
    </section>
  )
}
