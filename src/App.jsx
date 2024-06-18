import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { tasks } from "./data/tasks";
import { v4 as uuidv4 } from "uuid";
import Popup from "./components/Popup";

function App() {
  const [tasksList, setTasksList] = useState(tasks);
  const onAdd = (taskName) => {
    if (taskName == "") {
      return alert("Enter some todo");
    } else {
      setTasksList([
        ...tasksList,
        {
          id: uuidv4(),
          name: taskName,
          completed: false,
        },
      ]);
    }
  };

  const onDelete = (taskId) => {
    const tempList = tasksList.filter((task) => task.id !== taskId);
    setTasksList(tempList);
  };
  return (
    <div>
      <TaskForm onAdd={onAdd} />
      <Popup />
      <TaskList tasks={tasksList} onDelete={onDelete} />
    </div>
  );
}

export default App;
