import { useState } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router"

import Board from "./pages/board"
import Button from "./components/button"

const App = () => {
  const [ isLoading, setIsLoading ] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
  }

  return (
    <Router>
      {!isLoading ?
        <div className="h-screen flex items-center justify-center">
          <div className="p-8 gap-4 flex flex-col items-center justify-center border border-gray-200 rounded">
            <p className="pb-4">Welcome to your Planner</p>
            <form className="flex flex-col gap-2">
              <input className="border border-gray-200 py-1 px-2 rounded" placeholder="name" />
              <input className="border border-gray-200 py-1 px-2 rounded" placeholder="password" />
              <Button className="mt-4 w-full py-2 bg-black text-white border-none" onClick={handleLogin}>Login</Button>
            </form>
            <Button onClick={handleLogin}>Continue as Guest</Button>
          </div>
        </div>
        :
        <Routes>
          <Route path="/board" element={<Board />} />
          <Route path="/" element={isLoading ? <Navigate to="/board" replace /> : <div>Login</div>} />
        </Routes>
      }
    </Router>
  )
}

export default App
