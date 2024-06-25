import React, {useState} from "react";
import Register from "./Register";
import ModalRegister from "./ModalRegister";

function Login() { 
    const [showRegister, setShowRegister] = useState(false);

    const handleRegister = () => {
        setShowRegister(true);
    }

    const handleClose = () => {
        setShowRegister(false);
    }
return(
    <div class="p-4">
        <h2 class="text-2xl mb-4">Login</h2>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700">Username: </label>
                <input type="text" class="w-3/4 p-2 border border-gray-300 rounded mt-1" name="usernameLogin"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Password:</label>
                <input type="text" class="w-3/4 p-2 border border-gray-300 rounded mt-1" name="passwordLogin"/> 
            </div>
            <div class="flex flex-1">
                <button type="submit" class="bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700 ">Login</button>
                <p onClick={handleRegister} class="bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700 hover:cursor-pointer">Register</p>
                    <ModalRegister show={showRegister} onClose={handleClose}>
                        <Register/>
                    </ModalRegister>
            </div>
        </form>
    </div>
)}

export default Login;