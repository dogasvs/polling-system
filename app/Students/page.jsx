"use client"
import { useState } from "react";
import ClassData from "@/data.json"

export default function Students() {
  const [students, setStudents] = useState(ClassData.map(student => {
    return {
      ...student,
      isAttended: false
    }
  }));

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
            <td>  {student.name}</td>
            <td>{student.studentNumber}</td>
            <td>{student.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}