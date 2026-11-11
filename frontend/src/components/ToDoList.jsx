
import { useState } from 'react';

function Task({ taskName }) {
  return (
    <p>{taskName}</p>
  );
}

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      name: task.trim()
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  return (
    <div>
      <h1>This is a simple To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleInputChange}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <div>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            taskName={`${index + 1}. ${task.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
