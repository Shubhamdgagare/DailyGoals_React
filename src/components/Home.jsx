import React, { useEffect, useState } from 'react'
import Task from './Task';

function Home() {
  // using local storage to store task and with the help of ternary operator checking if values are available at local storage if not then send empty array
  const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    // forms prevent default is submitting form when submit button is clicked and send request and refresh page
    // so we are preventing page refresh
    e.preventDefault();

    // Storing/ saving title and Description variable value in tasks so it can render it with mapping  and show tasks.
    // first Storing previous value of tasks with the help of spread operator and then storing new values in array object.
    setTasks([...tasks, {title, description}]);
    setTitle("");
    setDescription("");

  }

    // Creating const function to delete Task when clicked on it
    const deleteTask = (index)=> {

      // using filter() for remove task
      const filteredArray = tasks.filter((val, i) => {
        return i!== index;
      }) 

      setTasks(filteredArray);

    };

    // We have to put useEffect before return call to work properly

    // using useEffect to update local store value into tasks
    // so with useEffect we will update localStorage tasks value when tasks useState values get updated
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    



  return (

    <div className='container'>
      <h1>Daily Goals</h1>

      {/* Storring form data with the help of onSubmit and storing in SubmitHandler function */}
      <form onSubmit={submitHandler}>

        {/* Storing title in setTitle use state so when click on submit button we can store it in setTasks useState*/}
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>

        {/* Storing description in setDescription useState so when click on submit button we can store it in setTasks useState */}
        <textarea placeholder='Description'
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Adding onClick to delete task when clicked */}
        <button type='submit' >ADD</button>
      </form>

      {/* for Mapping below we have to provide unique key for mapping to work and now providing value if each item to tasks */}
      {/* **** Sending reference of deleteTask function as well as index that we want to delete for function */}
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
        ))}

    </div>
  )
}

export default Home;