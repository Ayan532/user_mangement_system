import { useNavigate } from "react-router-dom"
import { deleteUser } from "../redux/userSlice/userSlice"
import { useDispatch } from "react-redux"



const Table = ({user}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleEditUser=(id)=>{
       navigate(`/user?${id}`)
    }
    const handleViewUser=(id)=>{
       navigate(`/user/${id}`)
    }
    const handleDeleteUser=(id)=>{
        dispatch(deleteUser(id))
     }
  return (
    <>

        <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                   {user._id}
                </th>
                <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                    {user.name}
                </td>
                <td className="px-6 py-4 flex gap-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleViewUser(user._id)}>View</span>
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleEditUser(user._id)}>Edit</span>
                    <span className="font-medium text-red-600 dark:text-red-600 hover:underline" onClick={()=>handleDeleteUser(user._id)}>Delete</span>
                </td>
            </tr>
        
       
    </>
  
  )
}

export default Table