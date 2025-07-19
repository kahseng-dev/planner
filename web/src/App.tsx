import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "@/pages/_layout"
import NoPage from "@/pages/_error"
import Login from "@/pages/login"
import Board from "@/pages/board"
import Register from "@/pages/register"

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="board" element={<Board />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
