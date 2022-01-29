import { TaskView } from "./TaskView";


export function TasksView({ tasks }) {
    return (
        <div className="Show" >

            <br></br>
            <h3 className="taskTitle">Tasks</h3>
            {tasks.map((task, key) => (<TaskView task={task}  key={key}/>))}
        </div>
    );
}