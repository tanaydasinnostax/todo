import React from "react";
import { List, Box } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Box style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '12px' }}>
      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
