"use client"

import { ColumnDef } from "@tanstack/react-table" // This type is used to define the shape of our data.
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Button
} from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

export type Student = {
  id: number
  first_name: string
  last_name: string
}

export const columns: ColumnDef<Student, any>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "first_name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">
        <div>
          {row.getValue("first_name")} {row.getValue("last_name")}
        </div>
        <span className="py-1 px-2 bg-slate-200/25 rounded text-xs"> {row.getValue("id")} Green</span>
      </div>

    )
  },
  {
    accessorKey: "last_name",
    header: "Surname"
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const student = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="w-[13.625rem]">
              <Link href={`/dashboard/database/student/${student.id}`}>
                Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
