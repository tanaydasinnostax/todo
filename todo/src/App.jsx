import { useState } from 'react';
import { Container, Typography, Box } from "@mui/material";
import './App.css';
import AddToDoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    setTodos([...todos, { title, description }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const updateTodo = (index, newTitle, newDescription) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { title: newTitle, description: newDescription } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Container maxWidth='sm' style={{ marginTop: "2rem", paddingBottom: "3rem" }}>
      <Box
        style={{
          background: '#f5f5f5',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant='h4' align="center" style={{ marginBottom: "1.5rem", fontWeight: 'bold' }}>
          Todo List App
        </Typography>
        <AddToDoForm addTodo={addTodo} />
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </Container>
  );
}

export default App;
