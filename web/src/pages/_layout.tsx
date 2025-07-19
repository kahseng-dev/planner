import { Outlet } from "react-router"

const Layout = () => {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
                <Outlet />
            </div>
        </>
    )
}

export default Layout