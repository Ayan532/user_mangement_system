import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsersById, updateUser } from "../redux/userSlice/userSlice";
import { useLocation } from "react-router-dom";

const CreateUserPage = () => {
    
    const {user}=useSelector(state=>state.users)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNumber,setPhone]=useState("")
    const {search}=useLocation()
    const dispatch=useDispatch()
    useEffect(() => {
       if(search){
        const id=search.split("?")[1]
        dispatch(fetchUsersById(id))
       }
    }, [dispatch,search])
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(search){
            const id=search.split("?")[1]
         await dispatch(updateUser({name,email,phoneNumber,id}))
        }
        else{

            await dispatch(createUser({name,email,phoneNumber}))
        }
        setName('')
        setEmail('')
        setPhone('')
    }
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {search?"Update User Form":"Create User Form"}
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={search && user?user.name:name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={search && user?user.email:email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
             Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
              placeholder="7127349"
              value={search && user?user.phoneNumber:phoneNumber}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            {search?"Update":"Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
