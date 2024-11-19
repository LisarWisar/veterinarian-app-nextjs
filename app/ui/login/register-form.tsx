"use client"
import { useState } from "react"

export default function Register (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = () => {
        console.log("email: ", email);
    }

    return(
        <div className="flex flex-col w-96 h-max p-4 bg-gray-100 border-solid border-1 rounded m-3 p-5 shadow-lg box-content">
            <h1 className="mb-5 text-2xl font-bold">Register</h1>
            <form onSubmit={async (e) => {
                await handleSubmit();
                e.preventDefault()
            }} className="w-96">
                <div className="mb-5">
                    <label className="block">First Name</label>
                    <input type="text" name="fname" placeholder="First name" className="w-full rounded p-1 mt-2 border border-slate-400 focus:border-black" required
                    onChange={(e)=> setFirstName(e.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label className="block">Last Name</label>
                    <input type="text" name="lname" placeholder="Last name" className="w-full rounded p-1 mt-2 border border-slate-400 focus:border-black" required
                    onChange={(e)=> setLastName(e.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label className="block">Email</label>
                    <input type="email" name="email" placeholder="Email" className="w-full rounded p-1 mt-2 border border-slate-400 focus:border-black" required
                    onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label className="block">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full rounded p-1 mt-2 border border-slate-400 focus:border-black" required
                    onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <button className="mt-4 w-full rounded border bg-teal-400 border-teal-600 focus:border-black focus:bg-teal-500 py-1" type="submit">Sign up</button>
                <h5 className="text-sm mt-2">Already have an account? <a href="/login" className="text-teal-600 font-medium">Sign in</a></h5>
            </form>
        </div>
    )
}