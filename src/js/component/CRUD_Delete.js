import React, { useState, useEffect } from 'react';

const CRUD_Delete = () => {
  const [userName, setUserName] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${userName}`, 
      {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
      }
    );

    if (response.ok) {
      console.log('User deleted successfully');
    } else {
      console.log('Error deleting user'); 
    }
  }

  useEffect(() => {
    console.log(userName)
  }, [userName])

  return (
    <div className="mx-auto mt-1 p-2" style={{width:"280px", height:"320px"}}>
        <h2 className="my-1"> DELETE </h2>
        
        <input
            type="text"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} 
        />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}

export default CRUD_Delete;