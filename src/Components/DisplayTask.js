import Task from "./Task";

const DisplayTask = ({ task, onDeleteTask, darkMode })=> {
  return (
    <>
      <div className="container">
        <div class="card-body">
          <ul class="list-group">
            {task.map((eachtask,i)=>(
              <Task  key={i} id={i} content={eachtask} onDelete={onDeleteTask} darkMode={darkMode}/>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default DisplayTask;