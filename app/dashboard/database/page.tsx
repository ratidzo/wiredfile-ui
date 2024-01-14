"use client"
import { useState } from "react";
import { columns } from "./students/columns";
import { StudentsTable } from "./students/students-table";
import { Button } from "@/components/ui/button";
import useSWR from "swr";

import {
    Input
} from '@/components/ui/input'

import {
    MagnifyingGlassIcon, PlusIcon
} from '@radix-ui/react-icons'

export default function Database() {
   const [students, setStudents] = useState()
   const [loading, setLoading] = useState(true)
   const [search, setSearch] = useState('')
   const [filter, setFilter]  = useState('')
   const [page, setPage] = useState(1)
   
   

   const API_URL = `http://127.0.0.1:8000/students/?page=${page}&search=${filter}`
   const API_TOKEN = "a92723c4904a3b4a682cfaf800889c88c6e7a24d"

   const fetcher = async (url:any) => {
   const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Token ${API_TOKEN}`,
            "Content-Type": "application/json"
        },
    })
    if(!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json()
   }

   const {data, error, isLoading} = useSWR(API_URL, fetcher)
   if (isLoading){
    return <div className="flex w-[80vw] min-h-[40vw] justify-center items-center">
        <h1 className="animate-pulse">
            Loading ...
        </h1>
    </div>
   }
    return (
        <div className="py-10 flex flex-col w-[75vw]">
            <div className="flex justify-between py-4">
                <div className="flex gap-2">
                    <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    type="text"
                    placeholder="Search students here ..."

                    className="w-[25vw]"  />

                    <Button variant="ghost" onClick={() => setFilter(search)}>
                        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                    <Button variant="default" className="gap-2 ml-8">
                        <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
                        Add new
                    </Button>
                </div>
                <h1 className=" text-2xl">
                        All students
                </h1>
                
                    
            </div>
            { data && <StudentsTable columns={columns} data={data.results} />}
            { data && 
              (<div className="flex gap-4 mt-2">
              <Button
               disabled={page === 1}
               variant={"ghost"} onClick={() => {setPage(page - 1)}}>
                  Previous Page
              </Button>
              <Button
               disabled={page === Math.ceil(data.count / 10)}
               variant={"ghost"} onClick={() => {setPage(page + 1)}}>
                  Next Page
              </Button>
              <Button variant={"ghost"}>
                Page {page} of {Math.ceil(data.count / 10)}
              </Button>
          </div>)
            }
       </div>
    )
}
