import React from "react";
import { Grid, Box } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Box style={{ padding: '2rem' }}>
      <Grid container spacing={3}>
        {todos.map((todo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TodoItem
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodoList;
