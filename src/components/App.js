import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const changeCategory = (category) => {
    setCategory(category);
  };

  const tasksToDisplay = tasks.filter(task => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeCategory={changeCategory} selectedCategory={category} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask} />
    </div>
  );
}

export default App;