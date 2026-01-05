import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (!task) return;

    const newTask = {
      id: Date.now(),
      name: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />

      <button onClick={handleAdd} style={{ marginLeft: 10 }}>
        Add
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.name}
            <button
              onClick={() => handleDelete(t.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
