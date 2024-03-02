"use client"
import React,{useState} from "react";
import { toast } from "react-toastify";


const RegisterForm = () => {

    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [password,setpassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const formSubmitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
        if(fullName==="") return toast.error("fullName is required");
        if(email==="") return toast.error("Email is required");
        if(number==="") return toast.error("number is required");
        if(password==="") return toast.error("password is required");
        if(confirmPassword==="") return toast.error("confirmedPassword is required");
        
       
        // console.log({email,password});
    }
    return (
        <div className="flex justify-center">
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <div className="flex mb-4">
                <div className="mr-10">
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Full Name:</h2>
                    <input 
                        className="border rounded p-1 text-xl" 
                        type="text" 
                        placeholder="Enter your Full Name"
                        value={fullName}
                        onChange={(e)=>setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Password:</h2>
                    <input 
                        className="border rounded p-1 text-xl" 
                        type="password" 
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                </div>
            </div>
    
            <div className="flex mb-4">
                <div className="mr-10">
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Email:</h2>
                    <input 
                        className="border rounded p-1 text-xl" 
                        type="email" 
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
    
                <div>
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Confirm Password:</h2>
                    <input 
                        className="border rounded p-1 text-xl" 
                        type="password" 
                        placeholder="Confirm your Password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
    
            <div className="flex mb-4">
                <div className="mr-4">
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Number:</h2>
                    <input 
                        className="border rounded p-1 text-xl" 
                        type="text" 
                        placeholder="Enter your Number"
                        value={number}
                        onChange={(e)=>setNumber(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-center">
            <button type="submit" className="text-1xl text-white bg-black p-2 font-bold w-1/4">Sign Me Up</button>
            </div>
        </form>
    </div>
    

        // <form onSubmit={formSubmitHandler} className="flex flex-col">
        //     <h2 className="text-1xl font-bold text-gray-800 mb-5">Full Name:</h2>
        //     <input 
        //     className="mb-4 border rounded p-2 text-xl" 
        //     type="string" 
        //     placeholder="Enter your Full Name"
        //     value={fullName}
        //     onChange={(e)=>setFullName(e.target.value)}
        //     />
        //     <h2 className="text-1xl font-bold text-gray-800 mb-5">Email:</h2>
        //     <input 
        //     className="mb-4 border rounded p-2 text-xl" 
        //     type="email" 
        //     placeholder="Enter your Email"
        //     value={email}
        //     onChange={(e)=>setEmail(e.target.value)}
        //     />
        //     <h2 className="text-1xl font-bold text-gray-800 mb-5">Number:</h2>
        //     <input 
        //     className="mb-4 border rounded p-2 text-xl" 
        //     type="text" 
        //     placeholder="Enter your Number"
        //     value={number}
        //     onChange={(e)=>setNumber(e.target.value)}
        //     />
        //     <h2 className="text-1xl font-bold text-gray-800 mb-5">password:</h2>
        //     <input 
        //     className="mb-4 border rounded p-2 text-xl" 
        //     type="password" 
        //     placeholder="Enter your password"
        //     value={password}
        //     onChange={(e)=>setpassword(e.target.value)}
        //     />
        //     <h2 className="text-1xl font-bold text-gray-800 mb-5">Confirm password:</h2>
        //     <input 
        //     className="mb-4 border rounded p-2 text-xl" 
        //     type="password" 
        //     placeholder="Enter your password"
        //     value={confirmPassword}
        //     onChange={(e)=>setConfirmPassword(e.target.value)}
        //     />
        //     <button type="submit" className="text-1xl text-white bg-blue-800 p-2 font-bold">Sign Me Up</button>
        // </form>
    )
}
export default RegisterForm