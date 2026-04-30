import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">📘 Study Planner</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/planner">Study Planner</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </div>
  );
}

export default App;