import { Istok_Web } from "next/font/google"

import {
  Button
} from '@/components/ui/button'

import {
  ArrowRightIcon
} from '@radix-ui/react-icons'

const istock_web_bold = Istok_Web({
  style: "normal",
  weight: "700",
  subsets: ["latin"]
})

export default function Home() {

  return (
    <div className="flex justify-center">
      <section className="flex flex-col items-center w-full pt-[10.94rem] h-[60rem]">
        <div>
          <h1 className="text-5xl font-extrabold py-2">Keep your school&apos;s data</h1>
          <h1 className="text-5xl font-extrabold text-indigo-500 dark:text-indigo-400 py-2">Wired to the Cloud.</h1>
        </div>
        <p className="mt-[1.31rem] text-2xl w-[48vw]">
            Manage all data from one place. <span className={`${istock_web_bold.className} text-indigo-500 dark:text-indigo-400 font-bold `}>Wired File</span> makes it easy
            to <span className="font-bold" >store</span>, <span className="font-bold">secure</span> and <span className="font-bold">retrieve</span> records.
        </p>
        <div className="flex justify-center gap-4 py-8">
          <Button>
            Get started
          </Button>
          <Button variant="outline" className="gap-2">
            Live demo
            <ArrowRightIcon className="h-[1.2rem] w-[1.2rem] hover:translate-x-2 transition-all duration-100" />
          </Button>
        </div>
      </section>
    </div>
  )
}
