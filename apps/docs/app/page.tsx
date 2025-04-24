'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pendente',
  });

  const loadTasks = async () => {
    const res = await axios.get('http://localhost:3001/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async () => {
    if (!form.title) return alert('Preencha o título!');
    await axios.post('http://localhost:3001/tasks', form);
    setForm({ title: '', description: '', status: 'pendente' });
    loadTasks();
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    loadTasks();
  };

  return (
    <main style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>📋 Minhas Tarefas</h1>

      <input
        placeholder="Título"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Descrição"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <br />
      <button onClick={createTask}>Criar Tarefa</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginTop: 20 }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <strong>Status: {task.status}</strong>
            <br />
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
