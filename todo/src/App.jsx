import { useState } from 'react';
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
    <div className="min-h-screen p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-[#525151] p-8 rounded-xl shadow-lg mt-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">My Todos</h1>
          <AddToDoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-4xl bg-[#525151] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Available Tasks</h1>
          <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
