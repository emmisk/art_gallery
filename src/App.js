import React, { useState } from "react"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import Button from "./components/Button"
import Info from "./components/Info"
import Contact from "./components/Contact"

function App() {
  const [show, setShow] = useState(null)

  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const toggleContact = () =>
    show === "contact" ? setShow(null) : setShow("contact")

  return (
    <div className="app">
      <Header />
      <div className="buttons">
        <Button handleClick={toggleInfo} text="About me" />
        <Button handleClick={toggleContact} text="Contact me" />
      </div>
      {show === "info" && <Info />}
      {show === "contact" && <Contact />}
      <Gallery />
    </div>
  )
}

export default App
