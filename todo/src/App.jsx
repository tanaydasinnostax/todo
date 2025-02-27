import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddToDoForm from './AddTodoForm';
import TodoList from './TodoList';
import { addTodo, deleteTodo, updateTodo } from './features/counter/counterSlice';

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-[#525151] p-8 rounded-xl shadow-lg mt-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">My Todos</h1>
          <AddToDoForm addTodo={(title, description) => dispatch(addTodo({ title, description }))} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-4xl bg-[#525151] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Available Tasks</h1>
          <TodoList
            todos={todos}
            deleteTodo={(index) => dispatch(deleteTodo(index))}
            updateTodo={(index, newTitle, newDescription) => dispatch(updateTodo({ index, newTitle, newDescription }))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
