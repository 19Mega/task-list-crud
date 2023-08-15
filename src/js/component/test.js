import React, { useEffect, useState } from 'react';

const newUser = "soyUnNuevoUser"

// CREAR USER - POST
const createUser = async () => {
    const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${newUser}`,
        {
            method: "POST",
            body: JSON.stringify([]),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
}



// ACTUALIZAR USUARIO - PUT
const user = "soyUnNuevoUser"  // Apuntamos al usuario {user} que queremos actualizarle cosas
const updateData = [{"done":"false","label":"tarea 1"},  {"done":"false","label":"tarea 2"}] // info que vamos actualizar (estructura que nos pide la API)

const updateUser = async () => {
    const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${user}`,
        {
            method: "PUT",
            body: JSON.stringify( updateData ),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
}


// READ

const readUser = async () => {
        try {
          const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${userName}`);
          const json = await response.json();
          setData(json);
          
          
        } catch (error) {
          console.log(error);
        }

        console.log(data)
        
}