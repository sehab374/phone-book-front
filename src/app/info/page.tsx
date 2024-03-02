"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import PersonImg from '../../../public/person.png'
import { toast } from "react-toastify";
import { FaAlignRight } from 'react-icons/fa';
// import Card from './card';


const ContactInfoPage=()=>{
    const [contactName,setContactName]=useState("");
    const [contacEmail,setContacEmail]=useState("");
    const [contactNumber,setContactNumber]=useState("");
   
    const formSubmitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
        if(contactName==="") return toast.error("fullName is required");
        if(contactNumber==="") return toast.error("number is required");
        
    }
    
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <section className="fix-height container m-auto px-7 flex items-center justify-center">
            <div className="flex">
                <div className="mr-10">
                    <Image src={PersonImg} alt="Image test" width={300} height={400} />
                </div>
                <form onSubmit={formSubmitHandler} className="flex flex-col ml-10  flex  justify-center">
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Name:</h2>
                    <input 
                        className="mb-4 border rounded p-2 text-xl " 
                        type="text" 
                        value={contactName}
                        onChange={(e)=>setContactName(e.target.value)}
                    />
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Number:</h2>
                    <input 
                        className="mb-4 border rounded p-2 text-xl" 
                        type="text" 
                        value={contactNumber}
                        onChange={(e)=>setContactNumber(e.target.value)}
                    />
                    <h2 className="text-1xl font-bold text-gray-800 mb-5">Email:</h2>
                    <input 
                        className="mb-4 border rounded p-2 text-xl" 
                        type="email" 
                        value={contacEmail}
                        onChange={(e)=>setContacEmail(e.target.value)}
                    />

                    


                    {/* <div>
                        <h1>My Next.js Application</h1>
                        <FaAlignRight color="red" size={24} />
                         <p>Click the heart to favorite</p>
                    </div> */}
                </form>
            </div>
        </section>
    </main>
    
       
    )
}
export default ContactInfoPage