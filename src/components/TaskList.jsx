import { useState } from "react";
import TaskItem from "./TaskItem";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const TaskList = ({ tasks, onDelete }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-green-500 py-10 px-10">
      <h2 className="font-bold mb-4 text-xl">Görev Listesi</h2>
      <div className="flex items-center  gap-3 mb-4">
        <div>
          <button
            type="button"
            className="bg-indigo-500 p-1 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              {isOpen ? (
                <IoIosArrowDropdown size={28} />
              ) : (
                <IoIosArrowDropup size={28} />
              )}{" "}
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div>
          {tasks.map((task) => {
            return <TaskItem task={task} key={task.id} onDelete={onDelete} />;
          })}
        </div>
      )}
    </div>
  );
};
export default TaskList;
