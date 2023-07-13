import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full top-0 sticky z-10"> <div className="w-full dark:bg-gray-800  p-4 text-white">

    <Link to="/"><h1 className="md:text-5xl text-lg font-semibold ">User Mangement System</h1></Link>
 </div></div>
  )
}

export default Navbar