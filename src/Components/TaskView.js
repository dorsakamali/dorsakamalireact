import { useState } from "react";
import { FaEdit } from 'react-icons/fa';

export function TaskView({ task }) {
    const [tsk, setTsk] = useState(task);
    //hook 
    function handleStatus(event) {
        setTsk({ ...tsk, Status: event.target.value })
    }
    return (<div className="taskView">
        <p>Title: {tsk.Title}</p><p>Description: {tsk.Description}</p>
       
        <div className="icon" >
          
            <FaEdit />
        </div>
        <select onChange={handleStatus} name="status" id="status" value={tsk.Status}>
            <option disabled={tsk.Status != "Blocked"} value="ToDo">ToDo</option>
            <option disabled={tsk.Status != "ToDo"} value="inProgress">inProgress</option>
            <option disabled={tsk.Status != "inProgress"} value="InQA">InQA</option>
            <option disabled={tsk.Status != "InQA"} value="Done">Done</option>
            <option disabled={tsk.Status != "Done"} value="Deployed">Deployed</option>
            <option disabled={tsk.Status != "inProgress"} value="Blocked">Blocked</option>
        </select>



    </div>);
}