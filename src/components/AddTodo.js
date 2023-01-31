import React, { useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title){
            alert("Title cannot be blank.");
            document.myForm.title.focus();
        }else if(!desc){
            alert("Description cannot be blank.");
            document.myForm.desc.focus();
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
            document.myForm.title.focus();
        }
    }
  return (
    <div className="container my-3">
      <form name="myForm" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h4>Title</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <h4>Description</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add ToDo
        </button>
      </form>
    </div>
  );
}
