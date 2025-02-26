import React, { useState } from "react";
import { Button, Paper, TextField, Box } from "@mui/material";

const AddToDoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <Box style={{ marginBottom: "2rem" }}>
      <Paper elevation={3} style={{ padding: "1rem", borderRadius: '8px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              marginBottom: '1rem',
              borderRadius: '8px',
              padding: '10px'
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              padding: '10px 0',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Add Task
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddToDoForm;
