import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {todos.map((todo, index) => (
          <div key={index} className="flex flex-col">
            <TodoItem
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
