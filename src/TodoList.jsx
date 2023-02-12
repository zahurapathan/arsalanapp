import React, { useState } from 'react'

export const TodoList = () => {
    const [todo,setTodo]=useState([]);
    const [text ,setText]=useState(' ')

    const handleAddTask=()=>{
        if(!text .trim()) return
        setTodo([...todo,text])
        setText('')
    }

    const handleDeleteTask=(item,inde)=>{
const filtered=todo.filter((elem, ind)=> ind  !== inde)
setTodo(filtered);
    }
  return (
    <div>
        <h1> To Do List</h1>
        <input type="text" placeholder='Add To Do' value ={text} onChange={(ele)=>setText(ele.target.value)} />{' '}
        <button onClick={()=>handleAddTask()}>Add Task</button>{''}
        
        <ul>
            {todo.map((item,index)=>{
                return(
                    <li key={index}>
                        {item}<button onClick={()=>handleDeleteTask(item,index)}>Delete</button>{''} 
                            <button>Edit</button>{''}

                        
                        </li>
                )
            })}     
        </ul>
    </div>
  )
}



















































// import { Button } from "@mui/material";
// import React,{useState} from "react";




// export const TodoList =()=>{
//     const [data,setData]=useState("")
//     const [item,setItem]=useState([])

//     const handeleAdd =() =>{
//         setItem ((oldItem)=>{
//             return( [...oldItem, data]
//                 )
//         })
//         setData("")
//     }
//     return (
//         <div className="app">
//             <h1 style={{backgroundColor:"pink"}}>Todo List</h1>
//             <input type="text"
//             value={data}
//             onChange={(e)=>setData(e.target.value)} />
//             <button style={{backgroundColor:"green"}} onClick={handeleAdd}>Add</button>
//             <ul>
        
//                 {item.map((itemvel)=>{
//                     return <li>{itemvel}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

  

