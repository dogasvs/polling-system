"use client"
import { useEffect, useState } from "react";
import ClassData from "@/data.json"

export default function Attendance() {
  const [students, setStudents] = useState(ClassData.map(student => {
    return {
      ...student,
      isAttended: false
    }
  }));

  const [showAttendance, setShowAttendance] = useState(true)

  const handleClick = (studentId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          isAttended: !student.isAttended
        }
      }
      return student;
    });

    setStudents(updatedStudents)
  }

  useEffect(() => {

  }, [students])

  return (
    <>
      {showAttendance ? (
        <>
          <ul className="attendanceList">
            {students.map(student => (
              <li className="attendanceItem" key={student.id}>
                <input
                  onClick={() => handleClick(student.id)}
                  type="checkbox"
                  className="checkbox"
                />
                {student.name}
              </li>
            ))}
          </ul>
          <button className="attendanceButton" onClick={() => setShowAttendance(false)}>Yoklamayı Tamamla</button>
        </>
      ) : (
        <>
          <div className="resultsContainer">
            <div className="numberofAttendance">
              <div>
                <p>Katılan öğrenci sayısı</p>
                <strong>{students.filter(x => x.isAttended).length} </strong> 
              </div>
              <div>
                <p>Katılmayan öğrenci sayısı</p>
                <strong>{students.filter(x => !x.isAttended).length} </strong> </div>
            </div>
            <div className="attendanceList">
              <h3>Katılanlar</h3>
              <ul>
                {students.filter(student => student.isAttended).map(student => (
                  <li className="resultItem" key={student.id}>
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absenceList">
              <h3>Katılmayanlar</h3>
              <ul>
                {students.filter(student => !student.isAttended).map(student => (
                  <li className="resultItem" key={student.id}>
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="attendanceButton" onClick={() => setShowAttendance(true)}>Yoklama Listesine Dön</button>
        </>
      )}

    </>
  )
}