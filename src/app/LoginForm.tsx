"use client"
import router from "next/router";
import React,{FormEvent, useState} from "react";
import { toast } from "react-toastify";


const LoginForm = () => {
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
       
     
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        if(email==="") return toast.error("Email is required");
        if(password==="") return toast.error("password is required");
        console.log(email,password);

        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
     
        if (response.ok) {
          router.push('/info')
        } else {
          // Handle errors
        }
      }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-1xl font-bold text-gray-800 mb-5">Email:</h2>
            <input 
            className="mb-4 border rounded p-2 text-xl" 
            type="email" 
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <h2 className="text-1xl font-bold text-gray-800 mb-5">password:</h2>
            <input 
            className="mb-4 border rounded p-2 text-xl" 
            type="password" 
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
             <div className="flex justify-center">
                    <button type="submit" className="text-1xl text-white bg-black p-2 font-bold w-1/2">Sign In</button>
             </div>
            
        </form>
    )
}
export default LoginForm