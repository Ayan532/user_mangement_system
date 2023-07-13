import { Link } from "react-router-dom"
import Table from "../components/Table"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice/userSlice";

const Home = () => {
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.users)
    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
   
  return (
    <div className="w-full p-1 md:p-5">
    <div className="flex flex-col justify-center items-center gap-5">
       <div className="w-[30%] flex justify-end"> 

       <Link to="/user"><button className="bg-indigo-500 text-white py-2 px-4 rounded-full">Add User</button></Link> 
       </div>
    </div>
        <div className="w-full h-[80vh] px-5 py-3 md:py-5 flex flex-col justify-start items-center">
        <div className="relative overflow-x-auto shadow-md rounded-lg ">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {users.length>0 && users &&  users.map((user)=><Table key={user._id} user={user}/>)}
                
                </tbody>
            </table>
</div>
        </div>
    </div>
  )
}

export default Home