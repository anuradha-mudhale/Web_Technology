function ViewStudent({ students }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added</p>
      ) : (
        <table border="1" style={{ margin: "auto", padding: "10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudent;