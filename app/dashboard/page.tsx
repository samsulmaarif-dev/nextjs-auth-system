"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  async function fetchTasks() {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  }

  async function addTask(e: any) {
    e.preventDefault();
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  }

  async function updateStatus(id: number, status: string) {
    await fetch("/api/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchTasks();
  }

  async function deleteTask(id: number) {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;

  return (
    <div style={{ padding: 40 }}>
      <h1>TaskFlow Dashboard</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <div>Total: {total}</div>
        <div>In Progress: {inProgress}</div>
        <div>Done: {done}</div>
      </div>

      <h2>Add Task</h2>
      <form onSubmit={addTask}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: 10 }}>
          {task.title} - {task.status}
          <button onClick={() => updateStatus(task.id, "in-progress")}>
            In Progress
          </button>
          <button onClick={() => updateStatus(task.id, "done")}>Done</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
