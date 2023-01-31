import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
      <h2>Todos List</h2>
      {props.todos.length===0?"No Todos to display": props.todos.map((todo)=>{
        return <TodoItem key={todo.sno} onDelete={props.onDelete} todo={todo}/>
      })}
    </div>
  )
}
