import React, { useState } from "react";
import { Button, Paper, TextField, Box } from "@mui/material";

const AddToDoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Box style={{ marginBottom: "2rem" }}>
      <Paper elevation={3} style={{ padding: "1rem", borderRadius: '8px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: '1rem' }}
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
