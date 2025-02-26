import React, { useState } from "react";
import { IconButton, TextField, Box, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const TodoItem = ({ todo, index, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSave = () => {
    updateTodo(index, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <Box style={{ marginBottom: '1rem' }}>
      <Card style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          {isEditing ? (
            <>
              <TextField
                value={newTitle}
                onChange={handleTitleChange}
                variant="outlined"
                fullWidth
                autoFocus
                style={{ marginBottom: '1rem' }}
              />
              <TextField
                value={newDescription}
                onChange={handleDescriptionChange}
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                style={{ marginBottom: '1rem' }}
              />
              <IconButton edge="end" onClick={handleSave} style={{ color: 'green' }}>
                <SaveIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {todo.title}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                {todo.description}
              </Typography>
              <IconButton edge="end" onClick={() => deleteTodo(index)} style={{ color: 'red' }}>
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => setIsEditing(true)} style={{ color: 'blue' }}>
                <EditIcon />
              </IconButton>
            </>
          )}
        </CardContent>
      </Card>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:cols-span-6"></div>
        <div className="col-span-12 lg:col-span-6"></div>
      </div>
    </Box>
  );
};

export default TodoItem;
