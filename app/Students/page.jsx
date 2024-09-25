"use client"
import { useState } from "react";
import ClassData from "@/data.json"
import Link from "next/link";

export default function Students() {
  const [students, setStudents] = useState(ClassData.map(student => {
    return {
      ...student,
      isAttended: false
    }
  }));

  console.log(students);

  return (
    <>
    <table className="studentTable">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Student Number</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id} className="studentItem">
          <td>
            <Link href={`/Students/${student.id}`}>
              {student.name}
            </Link>
          </td>
          <td>
            <Link href={`/Students/${student.id}`}>
              {student.studentNumber}
            </Link>
          </td>
          <td>
            <Link href={`/Students/${student.id}`}>
              {student.class}
            </Link>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}