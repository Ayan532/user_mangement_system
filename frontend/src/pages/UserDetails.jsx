import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchUsersById } from "../redux/userSlice/userSlice"


const UserDetails = () => {
    const dispatch=useDispatch()
    const {userId}=useParams()
    const {user}=useSelector(state=>state.users)
    
    useEffect(() => {
       
        dispatch(fetchUsersById(userId))

   
    }, [dispatch,userId])
    
  return user&&(
    <div className="w-full h-screen">
            <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Details Form
        </h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              User Id
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="id"
              name="id"
              placeholder="John Doe"
              disabled
              value={user._id}
            />
          </div>
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
              disabled
              value={user.name}
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
              disabled
              value={user.email}
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
              disabled
              value={user.phoneNumber}
            />
          </div>
        
        </form>
            </div>

    </div>
  )
}

export default UserDetails