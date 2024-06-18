import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };
  return (
    <div className="bg-zinc-500 px-4 py-10">
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          className="text-gray-600 px-4 py-1"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-1 rounded-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default TaskForm;
