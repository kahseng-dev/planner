import { Link } from "react-router"

import Button from "@components/button"

const NoPage = () => {
    return (
        <>
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-4xl font-bold font-mono">404</h2>
                <span className="text-neutral-700">The page you are looking for doesn't exist or has been moved</span>
                <Link to="/">
                    <Button className="bg-white">Go Home</Button>
                </Link>
            </div>
        </>
    )
}

export default NoPage