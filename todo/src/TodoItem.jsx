import React, { useState } from "react";
import { IconButton, ListItem, ListItemText, TextField, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const TodoItem = ({ todo, index, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEditChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSave = () => {
    updateTodo(index, newTodo);
    setIsEditing(false);
  };

  return (
    <ListItem
      style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {isEditing ? (
        <>
          <TextField
            value={newTodo}
            onChange={handleEditChange}
            variant="outlined"
            fullWidth
            autoFocus
            style={{ marginRight: '1rem' }}
          />
          <IconButton edge="end" onClick={handleSave} style={{ color: 'green' }}>
            <SaveIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText style={{ flex: 1, fontWeight: '500' }}>{todo}</ListItemText>
          <IconButton edge="end" onClick={() => deleteTodo(index)} style={{ color: 'red' }}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => setIsEditing(true)} style={{ color: 'blue' }}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
