import axios from "axios";
import { SERVER } from "../../utils/exportApi";
import { toast } from "react-hot-toast";



export const fetchUsersApi = async () => {
    

    const {data}=await axios.get(`${SERVER}`,{
        headers:{
            "Content-Type":"application/json"
        },
   
    })
   
    return data

}
  export const createUserApi= async (user) => {
 
    
    const {data}=await axios.post(`${SERVER}`,user,{
        headers:{
            "Content-Type":"application/json"
        },
   
    })

    toast.success(data.message)


    return data;
  };
  

 export const updateUserApi = async (user) => {
    const {id}=user
    const {data}=await axios.put(`${SERVER}/${id}`,user,{
        headers:{
            "Content-Type":"application/json"
        },
   
    })
    toast.success(data.message)
    
    return data;
 
  };
  
  export const fetchUserByIdApi = async (id) => {
   


    const {data}=await axios.get(`${SERVER}/${id}`,{
        headers:{
            "Content-Type":"application/json"
        },
   
    })

   
    return data

}

  export const deleteUserApi = async (id) => {
    const {data}=await axios.delete(`${SERVER}/${id}`,{
        headers:{
            "Content-Type":"application/json"
        },
   
    })
    toast.success(data.message)
    return data
  };