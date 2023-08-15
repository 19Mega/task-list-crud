import React, { useEffect, useState } from 'react';

const CRUD_Create = () => {

    const [newUser, setNewUser] = useState('')
    const [formResponse, setFormResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${newUser}`,
           {
            method: "POST",
            body: JSON.stringify([]),
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
        <div className="mx-auto my-auto p-3" style={{width:"280px", height:"800px"}}>
            <h2 className="m-3"> POST (CREATE)</h2>
            <p className="my-2">Agregar usuario</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="User Name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)} 
                />
                <button type="submit">Create</button>
            </form>
            <p className={"m-1 " + (formResponse === "The user exist" ? "text-danger" : "")}>{formResponse}</p>

        </div>
    )
}

export default CRUD_Create;