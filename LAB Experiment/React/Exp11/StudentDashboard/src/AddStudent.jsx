import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = { name, age, course };
    addStudent(studentData);

    setName("");
    setAge("");
    setCourse("");

    navigate("/view");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        /><br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;