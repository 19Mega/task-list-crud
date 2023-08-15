import React, { useEffect, useState } from "react";

const ToDoListComponent = () => {

    const [inputValue, setInputValue ] = useState('')
    const [toDoList, setToDoList]=useState([])
    const [toDoListMapped, setToDoListMapped] =([])
    const [taskCounter, settaskCounter]= useState(0)

    // USUARIO PUESTO A MANO, SE PUEDE HACER UN INPUT PARA ESTA VARIABLE E INYECTARLA AL USUARIO QUE SE DESEA ACTUALIZAR
    const user = "matias" 

    // ENVIAR LA LISTA MAPEADA A LA API
    const enviarTasks = async (putData) => {
        const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${user}`,
           {
            method: "PUT",
            // en body ponemos el contenido de lo que se manda
            body: JSON.stringify(putData),
            headers: {
                "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        console.log(response.status) // 201 crea nuevo usario / 200 successful / 400 bad request 
        console.log(response.ok); // will be true if the response is successful
        
        if (response.ok !== true) {
            setFormResponse("The user exist")
        }
    };

    const addNewTask = (event) => {
        if (event.key === "Enter") {
          setToDoList(toDoList.concat(inputValue))
          setInputValue("")
        }
    }

    const deleteTask = (task) =>{
        setToDoList(toDoList.filter(item => item !== task)) // con filter actualizo el array con otro array
    }

    useEffect(()=>{ // se va ejecutar cada vez que se modifique []
        console.log("nuevo item en todoList")
        console.log(toDoList)
        settaskCounter(toDoList.length)
        // TEST
        //handleTestButton() // actualiza la data

    },[toDoList])

    const loadTaskList = async () => {    
        try {
            const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${user}`);
            const json = await response.json();
            setToDoList(json.map(item => item.label))
        } catch (error) {
            console.log(error);
        }           
    }

    // TEST
    const handleTestButton = () =>{
        // ["a","b","c"] // antes de mapear la lista (toDoList)
        let data = toDoList.map((task) => ({ label: task, done: false }));
        //[{label:"a", done:false}, {label:"b", done:false}, {label:"c", done:false}] // despues de mapear la lista (toDoList)
        console.log("EN TEST DATA: ", data)
        enviarTasks(data)
        setToDoListMapped(data)
    }
   

    return (
        <div className="mx-auto mt-1 p-2" style={{width:"280px", height:"320px"}}>

            <button className="btn btn-primary m-1" onClick={handleTestButton}>guardar tareas</button>
            <button className="btn btn-secondary m-1" onClick={loadTaskList}>Traer tareas</button>
            
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

                {toDoList.map( (task, id) => (
                    <li className="list-group-item list-group-item-action text-secondary" key={id}>
                        {task}

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