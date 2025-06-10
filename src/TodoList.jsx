import { useState } from "react";
import{v4 as uuid} from "uuid";


export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample task",id: uuid(),isDone:false}]);
    let[newtodo,setnewtodo]=useState("");

    let addnewTask=()=>{
       setTodos((prevTodos)=>{
        return [...prevTodos,{task:newtodo,id:uuid(),isDone:false}]
       });
       setnewtodo("");
    };

    let updateTodovalue=(event)=>{
        setnewtodo(event.target.value);
    };

    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));
    };

    let markAllDone=()=>{
        setTodos(
            todos.map((todo)=>{
            return {
                ...todo,
               isDone:true,
            };

        }));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                isDone: true, 
              };
            } else {
              return todo; 
            }
          })
        );
      };
      

    return (<div className="container">

        <input placeholder="Write your task here.."
         type="text" 
         id="taskInput" 
         value={newtodo}
         onChange={updateTodovalue}></input>
        <br></br>
        <br></br>
        <button onClick={addnewTask}>Click to add the Task</button>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr>
        <h4>To Do List</h4>
        <ul>
            {todos.map((todo)=>(
             <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
            &nbsp; &nbsp;
            <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>

            
            </li>
            ))}
        </ul>
        <br></br>
        <button onClick={markAllDone}>All Tasks are now Completed!</button>
            </div>);
};