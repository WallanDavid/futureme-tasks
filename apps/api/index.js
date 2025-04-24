const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Listar todas as tarefas
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// Criar uma nova tarefa
app.post('/tasks', async (req, res) => {
  const { title, description, status } = req.body;
  const task = await prisma.task.create({
    data: { title, description, status },
  });
  res.json(task);
});

// Atualizar tarefa
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, description, status },
    });
    res.json(task);
  } catch (err) {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

// Deletar tarefa
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.json({ message: 'Tarefa deletada com sucesso!' });
  } catch (err) {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`🔥 API rodando em http://localhost:${PORT}`));
