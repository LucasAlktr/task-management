import Task from "./Task/Task";
import "./task.scss";
import { FcIpad } from "react-icons/fc";

export default function Tasks({
  tasks,
  onStatusChange,
  onTaskRemove,
  onClearTasks,
}){

  if (tasks.length === 0) {
    return(
      <div><h3>There are no tasks in the list</h3></div>
    )
  }

  return (
    <>
      <h2>
        <div className="title-tasks">
          <FcIpad />
        
        These are the tasks:
        </div>
      </h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}
      <hr />
      <div className="task">
      <hr />
        <button className="button-action" onClick={onClearTasks}>
          Clear Tasks
        </button>
      </div>
    </>
  );
}
