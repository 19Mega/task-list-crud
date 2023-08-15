import React, { useState, useEffect } from 'react';


// CRUD 
const CRUD_Read = () => {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // Make GET request to API
      const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr');
      
      // Await and parse response as JSON
      const json = await response.json();
      
      // Set state with data from API
      setData(json);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    fetchData();
  }, []);

  return (
    <div className="mx-auto my-auto p-3" style={{width:"280px", height:"800px"}}>
      {/* Display data from API */}
      <h2 className="m-3"> GET (READ)</h2>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default CRUD_Read;