import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";

const TaskItem = ({ task, onDelete }) => {
  const { name, id, isCompleted } = task;
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  const handleClick = () => {
    // setIsTaskCompleted(isTaskCompleted ? false : true);
    setIsTaskCompleted(!isTaskCompleted);
  };

  return (
    <div className="bg-blue-500 mb-4 flex items-center gap-6 px-4 py-1 rounded-md">
      <button onClick={handleClick}>
        {isTaskCompleted ? (
          <FaRegCheckCircle size={24} />
        ) : (
          <FaRegCircle size={24} className="w-6 h-6" />
        )}
      </button>

      {/* stilin şartlı gösterimi */}
      <p className={isTaskCompleted ? "line-through text-white" : ""}>{name}</p>
      <button className="ml-auto text-red-600" onClick={() => onDelete(id)}>
        <BsTrash3 size={20} />
      </button>
    </div>
  );
};
export default TaskItem;
