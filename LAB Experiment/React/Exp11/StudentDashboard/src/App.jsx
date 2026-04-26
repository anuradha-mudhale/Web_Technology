import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import AddStudent from "./AddStudent";
import ViewStudent from "./ViewStudent";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: students.length + 1,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent addStudent={addStudent} />} />
        <Route path="/view" element={<ViewStudent students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;