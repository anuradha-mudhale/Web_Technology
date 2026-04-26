import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#444", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/add" style={{ margin: "10px", color: "white" }}>Add Student</Link>
      <Link to="/view" style={{ margin: "10px", color: "white" }}>View Students</Link>
    </nav>
  );
}

export default Navbar;