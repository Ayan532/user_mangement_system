import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateUserPage from "./pages/CreateUserPage";
import UserDetails from "./pages/UserDetails";
import { Toaster } from "react-hot-toast";

function App() {
  

  return (
            <div className="bg-gray-100">
      <BrowserRouter>
      <Toaster/>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user" element={<CreateUserPage/>} />
            <Route path="/user/:userId" element={<UserDetails/>} />
          </Routes>
      </BrowserRouter>
            </div>
    
  )
}

export default App
