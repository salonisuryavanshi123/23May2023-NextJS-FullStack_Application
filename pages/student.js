import React, { useEffect, useState } from 'react'

export default function Student() {
    //2.1 Hooks Area
    const [students,setStudents] = useState([])

    useEffect(()=>{
        fetch('/api/students',{})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data.students);
            setStudents(data.students)
        })
        .catch((e)=>{

        })
    },[])

    //2.2 Function defination Area

    //2.3 Return Statement
  return (
    <>
        <div>Student</div>
        <ul>
            {
                students.map((cv,idx,arr)=>{
                    return <li key={idx}>{cv.name} {cv.surname}</li>
                })
            }
        </ul>
    </>
  )
}
