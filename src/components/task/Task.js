import "./Task.css"

const Task = (props) => {
    const {tasks}=props;
  return (
      <div>
          <ul>
              {tasks.map((task,index)=>{
                  return (
                    <li key={index}>
                        <input type="checkbox"/>
                        {task.title}
                        <button>x</button>
                    </li>
                  )
              })}
              
          </ul>
      </div>
  );
}

export default Task;

