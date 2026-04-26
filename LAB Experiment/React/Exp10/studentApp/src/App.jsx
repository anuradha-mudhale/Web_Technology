import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import StudentList from './studentList'
import './App.css'

function App() {
  const students = [
    {
      id:1,
      name:"Anuradha Mudhale",
      age:20,
      course:"AIML"
    },
    {
      id:2,
      name:"Dhanashree Mudhale",
      age:18,
      course:"CSE"
    },
    {
      id:3,
      name:"Shila Gavade",
      age:14,
      course:"CSE"
    }
  ]
  return(
    <>
    <div>
      <h1>Student List</h1>
      <StudentList stud={students}/>
      </div>
    </>
  )
}

export default App
