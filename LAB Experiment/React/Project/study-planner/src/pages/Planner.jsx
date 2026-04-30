import { useState } from "react";

function Planner() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  // Toggle completion
  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    ));
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Progress calculation
  const completed = tasks.filter((t) => t.done).length;
  const progress = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="page">
      <div className="planner-container">

        {/* Add Task */}
        <div className="panel">
          <h3>Add New Task</h3>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter your study task..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        {/* Task List */}
        <div className="panel">
          <h3>Your Study Tasks ({tasks.length} Tasks)</h3>
          {tasks.length === 0 ? (
            <p>No tasks yet</p>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className={task.done ? "done" : ""}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(index)}
                    />
                    {task.text}
                  </label>
                  <button onClick={() => deleteTask(index)}>✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Progress */}
        <div className="panel">
          <h3>Your Progress</h3>
          <div className="progress-box">
            <div
              className="circle"
              style={{ "--progress": progress }}
            >
              {progress}%
            </div>
            <p>{completed} of {tasks.length} tasks completed</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Planner;
