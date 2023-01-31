
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  

  const addTodo = (title,desc) =>{
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length -1].sno +1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])
  }
  
  const [todos, setTodos]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
    <Navbar/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
