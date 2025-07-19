import Button from "@components/button"

const Register = () => {

    const handleRegister = () => {

    }

    const handleLogin = () => {

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
                <Button className="w-full py-2 bg-neutral-900 text-white border-none hover:bg-black">Create an account</Button>
                <Button>Continue as Guest</Button>
            </div>
            <span className="self-center text-neutral-500 text-sm">Have an account? <button className="cursor-pointer text-black" onClick={handleLogin}>Sign In</button></span>
        </div>
    )
}

export default Register