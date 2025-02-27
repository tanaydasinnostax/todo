import { useState } from "react";

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
    <div className="p-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full sm:w-1/2 p-3 rounded-md border border-orange-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full sm:w-1/2 p-3 rounded-md border border-orange-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#e98901] text-white p-3 rounded-md hover:bg-[#FF990A] font-semibold shadow-md"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
