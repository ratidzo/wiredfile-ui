"use client"


import { useState } from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function StudentsTable<TData, TValue>({
    columns,
    data,
}:DataTableProps<TData, TValue> ) {
    
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    })

    
   
    const table = useReactTable({
        data, // feed data source here ?
        columns,
        state: {
            pagination,
        },
        pageCount: 10,
        manualPagination: true,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className="rounded-md border w-[75vw]">
            <Table className="transition all duration-100">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                )
                                        })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow 
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                        ))
                    ): (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}