import axios from 'axios';
const url='http://localhost:5000/students/'
export async function create(data){
    console.log({"data":data})
  
    try {
       
        return await axios.post(url,data);
      

    } catch (error) {
      return error  
    }

}

export async function get(){

    try {
        
        return await axios.get(url);
     
    } catch (error) {
      return error  
    }

}

export async function flush(id){
console.log("id",id)
    try {
        
        return await axios.delete(url+id);
     
    } catch (error) {
      return error  
    }
}