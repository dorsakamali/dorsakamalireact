import { useState } from "react";

export function AddTask({ handleAdd }) {
    const [newTask, setNewTask] = useState({ Title: "", Description: "" , Status: "ToDo"});

    function handleChange(event) {
        setNewTask({ ...newTask, [event.target.name]: event.target.value })
        //... : add or change field and keep pervious info
        //[] : to access
        //newTask.title == newTask["title"] 
    }
    function handleSubmit() {
        handleAdd(newTask)
    }

    return (

        <div id="inputContainer">
            <h3 id="add">Add a new Task</h3>
            <textarea name="Title" onChange={handleChange} className="input" placeholder="Title"></textarea>
            <br></br>
            <textarea name="Description" onChange={handleChange} className="input" placeholder="Description"></textarea>
            <br></br>
            <button className="button" onClick={handleSubmit} >
                +  Add
            </button>
        </div>
    );

}