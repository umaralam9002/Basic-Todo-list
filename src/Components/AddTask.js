import React from 'react'
import {useState} from 'react'

export default function AddTask({onAddTask, darkMode}) {

const [InputValue, setInputValue] = useState('')
const inputvaluehandler = (event)=>{
    const text = event.target.value
    setInputValue(text)
}

const addHandler = ()=>{
    if (InputValue.trim()) {
        onAddTask(InputValue);
        setInputValue('');
      }
    }
  return (
    <>
    <div  className={`container my-4 ${darkMode ? 'text-light' : ''}`}>
        <div class={`form-floating mb-3 w-75 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <input type="text" style={{ margin: '1rem 0', boxSizing: 'border-box', border: '2px solid'}}  class={`form-control ${darkMode ? 'bg-secondary text-light' : ''}`} id="floatingInput" placeholder="Add Task" value={InputValue} onChange={inputvaluehandler}/>
            <label for="floatingInput">Add Task</label>
        </div>

        <button type="button" class="btn btn-secondary " onClick={addHandler}>Add</button>
    </div>
    </>
  )
}
