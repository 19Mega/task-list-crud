import React, { useState, useEffect } from 'react';


// CRUD 
const CRUD_Read = () => {

  const [data, setData] = useState(null);
  const [userName, setUserName] = useState('')

  const handleSubmit = async (e) => {
      e.preventDefault();
          try {
            const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${userName}`);
            const json = await response.json();
            setData(json);
            
            
          } catch (error) {
            console.log(error);
          }

          console.log("DATA LEIDA EN EL CRUD_READ: ",data) 
          console.log(data)
  }


  useEffect(() => {    
    console.log(userName)
  }, [userName]);

  return (
    <div className="mx-auto my-auto p-3" style={{width:"280px", height:"320px"}}>
      <h2 className="my-1"> GET READ </h2>
      
      <form onSubmit={handleSubmit}>
        <input 
              type="text"
              placeholder="Search name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} 
        />
        <button type="submit" className="my-2">Create</button>
      </form>

      {data && <p>{JSON.stringify(data, null, 2)}</p>}

    </div>
  );
}

export default CRUD_Read;