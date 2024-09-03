import './App.css';
import AddTask from './Components/AddTask';
import DisplayTask from './Components/DisplayTask';
import Header from './Components/Header';
import { useState } from 'react';


function App() {
  const [Task, setTask] = useState(['sleeping'])
  const [darkMode, setDarkMode] = useState(false);

  const taskHandler = (data)=>{
      console.log(data);
        setTask((prev)=>[...prev,data])
  }
    const deleteTaskHandler = (taskId) => {
      setTask((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    };


    const toggleDarkMode = () => {
      setDarkMode((prev)=>!prev);
      document.body.classList.toggle('bg-dark', !darkMode);
      document.body.classList.toggle('text-light', !darkMode);
      document.body.classList.toggle('bg-grey', darkMode);
    };
    
  return (
    <>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <AddTask onAddTask={taskHandler} darkMode={darkMode}/>
    <DisplayTask  task={Task} onDeleteTask={deleteTaskHandler} darkMode={darkMode}/>
    </>
  );
}

export default App;
