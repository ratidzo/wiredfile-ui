
export default function Home() {

  return (
    <div className="flex justify-center">
      <section className="flex flex-col items-center w-full pt-[5.44rem]">
        <div>
          <h1 className="text-5xl font-extrabold py-2">Keep your school's data</h1>
          <h1 className="text-5xl font-extrabold text-indigo-500 dark:text-indigo-400 py-2">Wired to the Cloud.</h1>
        </div>
        <p className="mt-[1.31rem] text-2xl w-[48vw]">
            Manage all data from one place. <span className="text-indigo-500 dark:text-indigo-400 font-bold">Wired File</span> makes it easy
            to <span className="font-bold" >store</span>, <span className="font-bold">secure</span> and <span className="font-bold">retrieve</span> records.
        </p> 
      </section>
    </div>
  )
}
