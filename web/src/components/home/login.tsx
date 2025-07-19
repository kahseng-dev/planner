import Button from "@components/button"

const Login = () => {

    const handleLogin = () => {
        
    }
    
    const handleRegister = () => {

    }

    return (
        <div className="py-4 px-6 flex flex-col gap-5 bg-neutral-50 border border-neutral-300">
            <div>
                <h2 className="text-xl font-semibold">Sign In</h2>
                <span className="text-neutral-500 text-sm">Enter your email below to login to your account</span>
            </div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="flex flex-col gap-1">
                    Email
                    <input type="email" className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" placeholder="you@example.com" />
                </label>
                <label htmlFor="password" className="flex flex-col gap-1">
                    Password
                    <input type="password"className="border border-gray-200 py-0.5 px-2 focus:outline focus:outline-neutral-300" placeholder="password" />
                </label>
            </form>
            <div className="mt-2 flex flex-col gap-2">
                <Button className="w-full py-2 bg-neutral-900 text-white border-none hover:bg-black" onClick={handleLogin}>Login</Button>
                <Button onClick={handleLogin}>Continue as Guest</Button>
            </div>
            <span className="self-center text-neutral-500 text-sm">Don't have an account? <button className="cursor-pointer text-black" onClick={handleRegister}>Sign Up</button></span>
        </div>
    )
}

export default Login