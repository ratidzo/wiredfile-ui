import { sql } from "@vercel/postgres"
import { Student } from "../../students/columns"

export default async function Profile(
  { params }: { params: { id: number } }
) {
  const student = await getStudent(params.id)
  return (
    <div>
      <h1 className="font-bold text-3xl text-indigo-500">
        Profile page for {student.first_name} {student.last_name}
      </h1>
    </div>
  )
}

async function getStudent(id: number) {
  const { rows } = await sql`SELECT * FROM students
                              WHERE id=${id}`
  return rows[0] as Student
}
