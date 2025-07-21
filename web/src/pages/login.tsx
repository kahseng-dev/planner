import { useState } from "react"
import { useNavigate } from "react-router"
import type { ChangeEvent, FormEvent } from "react"

import Button from "@components/button"
import { request, errorLog, setAuthToken } from "@/services/api"

const Login = () => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ form, setForm ] = useState({ email: "", password: "" })
    const [ error, setError ] = useState<string | null>(null)

    const navigate = useNavigate()

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target?.name]: event.target?.value, })
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()

        setIsLoading(true)
        setError(null)

        request("POST", 
                "/users/login", 
                { email: form.email, password: form.password })
                .then(response => {
                    setAuthToken(response.data.token)
                    setIsLoading(false)
                    navigate("/board")
                })
                .catch(error => {
                    errorLog(error)

                    if (error.response) {
                        setError("Please check your credentials")
                    }

                    else if (error.request) {
                        setError("Please check your connection")
                    }

                    setIsLoading(false)
                })
    }

    return (
        <div className="h-full md:h-min py-8 md:py-4 px-6 flex flex-col bg-neutral-50 border border-neutral-300">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">Sign In</h2>
                <span className="text-neutral-500 text-sm">Enter your credentials below to access your account</span>
                { error && <span className="mt-2 text-sm text-red-500 bg-red-100 rounded w-full p-2">{error}</span>}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                        type="password" 
                        name="password"
                        className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" 
                        placeholder="password" 
                        required />
                </label>
                <Button 
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 w-full py-2 bg-neutral-900 text-white border-none hover:bg-black disabled:bg-neutral-800">
                    Login
                </Button>
            </form>
            <Button 
                onClick={() => navigate("/board")}
                disabled={isLoading}
                className="mt-2 w-full disabled:bg-neutral-300">
                Continue as Guest
            </Button>
            <span className="mt-4 self-center text-neutral-500 text-sm">Don't have an account?
                <button 
                    onClick={() => navigate("/register")}
                    disabled={isLoading}
                    className="ml-2 cursor-pointer text-black">
                    Sign Up
                </button>
            </span>
        </div>
    )
}

export default Login