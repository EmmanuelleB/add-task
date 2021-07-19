import "./Task.css"

const Task = (props) => {
    const {tasks, setTasks}=props;
    const handleChecked = (index)=>{
        const newTaskItem =[...tasks];
        newTaskItem[index].isDone = !newTaskItem[index].isDone;
        setTasks(newTaskItem);
    }
    const handleRemove =(index)=>{
        const newTaskItem =[...tasks];
        newTaskItem.splice(index, 1);
        setTasks(newTaskItem);
    }
  return (
      <div>
          <ul>
              {tasks.map((task,index)=>{
                  return (
                    <li key={index}>
                        <input type="checkbox" checked={task.isDone} onClick={()=>{handleChecked(index)}}/>
                        <span className={task.isDone ? "checked" : ""}>{task.title}</span>
                        <button onClick={()=>{handleRemove(index)}}>x</button>
                    </li>
                  )
              })}
              
          </ul>
      </div>
  );
}

export default Task;

