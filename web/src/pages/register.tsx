import { Link } from "react-router"

import Button from "@components/button"

const Register = () => {

    const handleRegister = () => {

    }

    return (
        <div className="py-4 px-6 flex flex-col gap-5 bg-neutral-50 border border-neutral-300">
            <div>
                <h2 className="text-xl font-semibold">Sign Up</h2>
                <span className="text-neutral-500 text-sm">Enter your credentials below to register your account</span>
            </div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="flex flex-col gap-1">
                    Email
                    <input type="email" className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" placeholder="you@example.com" required />
                </label>
                <label htmlFor="password" className="flex flex-col gap-1">
                    Password
                    <input type="password"className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" placeholder="password" required />
                </label>
            </form>
            <div className="mt-2 flex flex-col gap-2">
                <Button 
                    onClick={handleRegister}
                    className="w-full py-2 bg-neutral-900 text-white border-none hover:bg-black">
                    Create an account
                </Button>
                <Link to="/board">
                    <Button className="w-full">Continue as Guest</Button>
                </Link>
            </div>
            <span className="self-center text-neutral-500 text-sm">Have an account? <Link to="/" className="cursor-pointer text-black">Sign In</Link></span>
        </div>
    )
}

export default Register