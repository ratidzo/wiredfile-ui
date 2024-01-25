"use client"

import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.

type Student = {
  id: number
  first_name: string
  last_name: string
}

export const columns: ColumnDef<Student>[] = [
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
  }
]
