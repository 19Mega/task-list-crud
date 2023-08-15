import React, { useEffect, useRef, useState } from "react";

const ToDoListComponent = () => {

    const [inputValue, setInputValue ] = useState('')
    const [toDoList, setToDoList]=useState([])
    const [taskCounter, settaskCounter]= useState(0)

    const addNewTask = (event) => {
        if (event.key === "Enter") {
          setToDoList(toDoList.concat(inputValue))
          setInputValue("")
          console.log("estoy adentro del addnewtask y dentro del if") 
        }
    }

    const deleteTask = (task) =>{
        console.log("dentro del deleteTask: ", task)
        setToDoList(toDoList.filter(item => item !== task)) // con filter actualizo el array con otro array
    }

     useEffect(()=>{ // se va ejecutar cada vez que se modifique []
         console.log("nuevo item en todoList")
         console.log(toDoList)
         settaskCounter(toDoList.length)
     },[toDoList])

    useEffect(()=>{ // se ejecuta cada vez que pone algo en el input
        console.log(inputValue)
    },[inputValue])
    
    // onKeyDown={} evento de presionar tecla

    return (
        <div className="mx-auto mt-1 p-2" style={{width:"280px", height:"320px"}}>
            
            <h2 className="my-1 text-white"> todo's </h2>

            {/* lista de toDo */}
            <div className="list-group mx-auto" style={{width:"260px"}}>

                {/* input de toDo */}
                <input className="list-group-item list-group-item-action"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={addNewTask} 
                placeholder="What needs to be done?"
                />

                {toDoList.map( (task) => (
                    <li className="list-group-item list-group-item-action text-secondary "

                    >{task}
                        <button 
                        className="btn btn-light btn-sm float-end text-secondary link-hover"
                        onClick={() => deleteTask(task)}
                        >
                        X
                        </button>   

                    </li>
                ))}

                {/* contador de tasks */}
                <p className="list-group-item list-group-item-action text-start text-small text-secondary">{taskCounter} Items left</p>

            </div>

        </div>
    )
}


export default ToDoListComponent