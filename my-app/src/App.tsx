import React from "react"
import HomePage from "./pages/home/home.page"
import { Route,Routes } from 'react-router-dom'
import LoginPage from "./pages/login/login.page"

function App() {

  return (
    <main className="container mx-auto box-border h-screen">
      <Routes>
        {/* <Route path="/" element={<HomePage />}/> */}
        <Route path="/" element={<LoginPage />}/>
      </Routes>
      
    </main>
  )
}

export default App

