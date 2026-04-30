function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <span
        onClick={() => toggleTask(index)}
        className={task.completed ? "done" : ""}
      >
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(index)}>
        🗑
      </button>
    </li>
  );
}

export default TaskItem;