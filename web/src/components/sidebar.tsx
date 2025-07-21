import { Link, useNavigate } from "react-router"
import type { Dispatch, SetStateAction } from "react"

import Button from "@/components/button"
import SidebarIcon from "@assets/icons/sidebar.svg"
import GithubIcon from "@assets/icons/github.svg"
import BoardIcon from "@assets/icons/home.svg"
import LogoutIcon from "@assets/icons/logout.svg"
import { getAuthToken } from "@/services/api"

interface SidebarProps {
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>,
}

const Sidebar = ({ isOpen, setIsOpen }:SidebarProps) => {

    const isUser = getAuthToken()

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
    }

    const handleToggleSidebar = () => {
        return setIsOpen(!isOpen)
    }

    return (
        <div className={`${isOpen ? "visible" : "invisible"} flex absolute size-full z-10`}>
            <div className={`${isOpen ? "w-md *:opacity-100" : "w-0 *:opacity-0"} *:transition flex flex-col bg-white transition-all duration-200 ease-in-out`}>
                <div className="p-4 flex items-center gap-4 border-b border-neutral-300">
                    <Button onClick={handleToggleSidebar}>
                        <img className="size-5 min-w-5" src={SidebarIcon} alt="sidebar-icon" />
                    </Button>
                    <span className="cursor-default">Planner</span>
                </div>
                <div className="py-4 h-full *:px-4 *:border-l-4 *:border-transparent gap-4 flex flex-col">
                    { !isUser && 
                        <span className={`${isOpen ? "visible" : "invisible"} w-xs p-4 bg-red-100 text-red-400 transition duration-300`}>
                            WARNING: you are logged in as guest, your data will not be saved on the server.<br/><br/>
                            Please create an account to save your data.
                            <Link className="ml-2 text-red-600 hover:underline" to="/register">Create an account</Link>
                        </span>
                    }
                    <span className="text-neutral-400 cursor-default">Menu</span>
                    <Link to="/board"
                        className="py-2 gap-4 flex items-center cursor-pointer text-neutral-500 transition hover:bg-gray-100 hover:border-gray-400">
                        <img className="size-5 min-w-5" src={BoardIcon} alt="board-icon" />
                        Board
                    </Link>
                    <a  href="https://github.com/kahseng-dev/planner"
                        target="_blank"
                        className="py-2 gap-4 flex items-center cursor-pointer text-neutral-500 transition hover:bg-gray-100 hover:border-gray-400">
                        <img className="size-5 min-w-5" src={GithubIcon} alt="github-icon" />
                        Github
                    </a>
                </div>
                <div className="py-4 *:px-4 *:border-l-4 *:border-transparent gap-4 flex flex-col border-t border-neutral-300">
                    <span className="text-neutral-400 cursor-default">Settings</span>
                    <button 
                        onClick={handleLogout}
                        className="py-2 gap-4 flex items-center cursor-pointer text-neutral-500 transition hover:bg-gray-100 hover:border-gray-400">
                        <img className="size-5 min-w-5" src={LogoutIcon} alt="logout-icon" />
                        Logout
                    </button>
                </div>
            </div>
            <div 
                onClick={handleToggleSidebar}
                className={`${isOpen ? "opacity-100" : "opacity-0"} cursor-pointer bg-black/10 size-full transition`}/>
        </div>
    )
}

export default Sidebar