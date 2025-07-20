import { useState } from "react"
import { useNavigate } from "react-router"
import type { ChangeEvent, FormEvent } from "react"

import Button from "@components/button"

import { register } from "@/services/api"

const Register = () => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ form, setForm ] = useState({ email: "", password: "" })
    const [ data, setData ] = useState(null)

    const navigate = useNavigate()

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        return setForm({ ...form, [event.target?.name]: event.target?.value, })
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()
        setIsLoading(true)
        console.log(form)
        return 
        // data = register(form)
    }

    return (
        <div className="py-4 px-6 flex flex-col bg-neutral-50 border border-neutral-300">
            <div>
                <h2 className="text-xl font-semibold">Sign Up</h2>
                <span className="text-neutral-500 text-sm">Enter your credentials below to register your account</span>
            </div>
            <form 
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-4">
                <label 
                    htmlFor="email" 
                    className="flex flex-col gap-1">
                    Email
                    <input 
                        onChange={handleChange}
                        value={form.email}
                        type="email"
                        name="email"
                        className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" 
                        placeholder="you@example.com" 
                        required />
                </label>
                <label 
                    htmlFor="password" 
                    className="flex flex-col gap-1">
                    Password
                    <input 
                        onChange={handleChange}
                        value={form.password}
                        type="password" 
                        name="password"
                        className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" 
                        placeholder="password" 
                        required />
                </label>
                <Button 
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 w-full py-2 bg-neutral-900 text-white border-none hover:bg-black">
                    Create an account
                </Button>
            </form>
            <Button 
                onClick={() => navigate("/board")}
                disabled={isLoading}
                className="mt-2 w-full">'
                Continue as Guest
            </Button>
            <span className="mt-4 self-center text-neutral-500 text-sm">Have an account?
                <button 
                    onClick={() => navigate("/")}
                    disabled={isLoading}
                    className="ml-2 cursor-pointer text-black">
                    Sign Up
                </button>
            </span>
        </div>
    )
}

export default Register