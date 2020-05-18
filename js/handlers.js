/* Function to GET Web API Data */

const getData = async (baseURL)=>{

    let url = `${baseURL}`;
    const res = await fetch(url);
    
       try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error',error);
    }
}


/* Function to POST data */

const postData = async ( url = '', data = {})=>{
    // console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
