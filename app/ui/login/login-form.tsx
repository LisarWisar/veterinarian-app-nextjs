"use client"
import { useState } from "react"

export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log("email: ", email);
    }

    return(
        <div className="flex flex-col w-96 h-72 p-4 bg-gray-100 border-solid border-1 rounded m-3 p-5 shadow-lg box-content">
            <h1 className="mb-5 text-2xl font-bold">Login</h1>
            <form onSubmit={async (e) => {
                await handleSubmit();
                e.preventDefault()}
            } className="w-96">
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
                <button className="mt-4 w-full rounded border bg-teal-400 border-teal-600 focus:border-black focus:bg-teal-500 py-1" type="submit">Sign in</button>
                <h5>Don't have an account? <a href="/register" className="text-teal-600 font-medium">Register</a></h5>
            </form>
        </div>
    )
}