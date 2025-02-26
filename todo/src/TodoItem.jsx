import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const TodoItem = ({ todo, index, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            autoFocus
          />
          <textarea
            value={newDescription}
            onChange={handleDescriptionChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            rows="3"
          />
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            <SaveIcon />
          </button>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg text-[#E98901] mb-2 uppercase">{todo.title}</h3>
          <hr />
          <p
            className={`mb-4 ${isExpanded ? "whitespace-normal" : "truncate"} `}
            style={{ maxHeight: "6em" }}
            onClick={toggleDescription}
          >
            {todo.description}
            {!isExpanded && todo.description.length > 50 && "..."}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700"
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              <EditIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
