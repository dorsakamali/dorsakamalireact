import logo from './logo.svg';
import './App.css';

import { Header } from './Components/Header';
import { AddTask } from './Components/AddTask';
import { useState } from 'react';

import { TasksView } from './Components/TasksView';
// import img1 from"./assets/todo.png"
function App() {
  const [tasks , setNewTasks] = useState([]);
 

  function addHandling(newTasks){
    setNewTasks([...tasks , newTasks])
  }

  function changeStatus(){

  }
  return (<div 
  style={{  
    backgroundColor:'darkslategrey',
    minHeight:"300vh"
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'
  }}
  
   >
    <Header />
    <AddTask handleAdd={addHandling} />
<TasksView tasks = {tasks} />
    </div>
    );
}

export default App;
