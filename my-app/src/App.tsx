import React from "react"
import HomePage from "./pages/home/home.page"
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/login/login.page"
import ProviderAuth from "./context/ContextProviderAuth"
import GuardRout from "./components/GuardRout"

function App() {

  return (
    <main className="container mx-auto box-border h-screen">
      <ProviderAuth>
        <Routes>
          <Route path="/home" element={
            <GuardRout>
              <HomePage />
            </GuardRout>
          } />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </ProviderAuth>

    </main>
  )
}

export default App

