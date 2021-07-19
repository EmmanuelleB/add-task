import "./Form.css"
const Form = (props) => {
    const {newTask, setNewTask, tasks, setTasks}=props
    const handleAddTask=(event)=>{
        const value= event.target.value;
        setNewTask(value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newTaskItem = [...tasks,{title:newTask, isDone:false}];
        setTasks(newTaskItem)

    }
  return (
  <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleAddTask} />
        <button>Add Tasks</button>
      </form>
  </div>
  )
}

export default Form;