import axios from 'axios'

export async function getWriters() { 
  let headers = {
    'Content-Type': 'application/json',
  };

  try{
    const response = await axios.get('http://localhost:1323/writer/getAll', "",headers )
    console.log(response.data)
    return response.data
  }
  catch(err){
    console.log(err)
  }

  return ""
}

