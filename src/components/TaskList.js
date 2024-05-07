import React from "react";
import Task from "./Task"; // Make sure to import the Task component

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} category={task.category} onDelete={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
