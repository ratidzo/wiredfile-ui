"use client"
import { Suspense, useState } from "react";
import { columns } from "./students/columns";
import { StudentsTable } from "./students/students-table";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import {
    Input
} from '@/components/ui/input'
import {
    Skeleton
} from '@/components/ui/skeleton'
import {
    MagnifyingGlassIcon, PlusIcon
} from '@radix-ui/react-icons'
import { CircularProgress } from "@mui/material";

export default function Database() {
   const [students, setStudents] = useState()
   const [loading, setLoading] = useState(true)
//    const [search, setSearch] = useState('')
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
   
    return (
        <div className="py-10 flex flex-col w-[75vw]">
            <div className="flex justify-between py-4">
                <div className="flex gap-2">
                    <Input
                    value={filter}
                    // onKeyDown={(event)=> {
                    //     if(event.key==='Enter') {
                    //         setFilter(search)
                    //     }
                    // }}
                    onChange={(event) => {
                        setPage(1)
                        setFilter(event.target.value)}}
                    type="text"
                    placeholder="Search students here ..."

                    className="w-[25vw]"  />

                    <Button variant="ghost" 
                    // onClick={() => setFilter(filter)}
                    >
                        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                    <Button variant="default" className="gap-2 ml-8">
                        <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
                        Add new
                    </Button>
                </div>
                <h1 className=" text-2xl">
                        All Students
                </h1>
                
                    
            </div>
           
            {
                isLoading ? (
                    
                    <div className="flex justify-center h-[40vh] items-center w-[75vw] py-6">
                       <Box sx={{ display: 'flex'}}>
                        <CircularProgress color="inherit"/>
                       </Box>
                    </div>
                        
                    
                ): 

                (
                       
                <>
                    <StudentsTable columns={columns} data={data.results} />
                    <div className="flex gap-4 mt-2">
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
                    </div>
                </>
                )
            }
       </div>
    )
}
