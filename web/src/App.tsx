import { useState } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router"

import Login from "@components/home/login"
import Board from "@/pages/Board"

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  return (
    <Router>
      {!isLoggedIn ?
        <div className="h-screen flex justify-center items-center bg-gray-200">
          <Login />
        </div>
        :
        <Routes>
          <Route path="/board" element={<Board />} />
          <Route index element={<Navigate to="/board" replace />} />
        </Routes>
      }
    </Router>
  )
}

export default App
