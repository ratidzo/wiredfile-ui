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
        header: "Name"
    },
    {
        accessorKey: "last_name",
        header: "Surname"
    }
]