import React from "react"
import "./App.css"

import { WoutVanAert, FabioJakoksen } from "./components"

const App = () => {
  return (
    <div id="app">
      <h1>Le Tour de France</h1>
      <h2>Current Green Jersey leader is: </h2>
      <div id="riders">
        <WoutVanAert />
        <FabioJakoksen />
      </div>
    </div>
  )
}

export default App
