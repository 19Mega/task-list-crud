import React, { useEffect, useState } from 'react';

const CRUD_Update = () => {

    const [newUser, setNewUser] = useState('')
    const [formResponse, setFormResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${newUser}`,
           {
            method: "PUT",
            // en body ponemos el contenido de lo que se manda
            body: JSON.stringify([{ label: "hola estoy modificando", done: false }]),
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

    useEffect(()=>{
        //createNewUser()
        console.log(newUser)
    },[newUser])

    

    return(
        <div className="mx-auto mt-1 p-2" style={{width:"280px", height:"320px"}}>
            <h2 className="my-1"> PUT - UPDATE </h2>
                <p className="my-1">Actualiza tareas</p>
                <p className="my-1">Las tareas van </p>
                <p className="my-1">dentro del body:([  objeto  ]) </p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Put same name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)} 
                />
                <button type="submit">update</button>
            </form>
            <p className={"m-1 " + (formResponse === "The user exist" ? "text-danger" : "")}>{formResponse}</p>

        </div>
    )
}

export default CRUD_Update;