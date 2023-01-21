import HomePage from "./pages/home/home.page"
import React from "react"
import NavbarComponent from "./components/NavbarComponent"

function App() {

  return (
      <main className="container mx-auto box-border h-[500px]">
        <NavbarComponent />
        <HomePage/>
      </main>
  )
}

export default App
