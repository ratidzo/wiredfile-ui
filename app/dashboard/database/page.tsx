import { columns } from "./students/columns";
import { StudentsTable } from "./students/students-table";
import { Button } from "@/components/ui/button";
import { sql } from '@vercel/postgres'

import {
  PlusIcon
} from '@radix-ui/react-icons'

export default async function DataBase() {
  const students = await getStudents()
  return (
    <div className="py-10 flex flex-col w-[75vw]">
      <StudentsTable columns={columns} data={students} />
    </div>
  )
}
async function getStudents() {
  const { rows } = await sql`SELECT * FROM students`
  return rows;
}
