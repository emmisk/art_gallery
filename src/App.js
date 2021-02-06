import React, { useState } from "react"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import Button from "./components/Button"
import Info from "./components/Info"
import Contact from "./components/Contact"
import MyImg from "./images/myImg.jpg"

function App() {
  const [show, setShow] = useState(null)
  
  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const toggleContact = () =>
    show === "contact" ? setShow(null) : setShow("contact")
    const toggleGallery = () =>
    show === "gallery" ? setShow(null) : setShow("gallery")

  return (
    <div className="app">
      <Header />
      <div className="buttons">
        <Button handleClick={toggleInfo} text="About me" />
        <Button handleClick={toggleContact} text="Contact me" />
        <Button handleClick={toggleGallery} text="My works" />
      </div>
      {show === "info" && <Info />}
      {show === "contact" && <Contact />}
      {show === "gallery" && <Gallery />}
      <img src={MyImg} alt="me"/>
    </div>
  )
}

export default App
