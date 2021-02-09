import React, { useState } from "react"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import Button from "./components/Button"
import Info from "./components/Info"
import Contact from "./components/Contact"
import MyImg from "./images/myPic.jpg"

function App() {
  const [show, setShow] = useState(null)
  
  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const toggleGallery = () =>
  show === "gallery" ? setShow(null) : setShow("gallery")
  const toggleContact = () =>
  show === "contact" ? setShow(null) : setShow("contact")

  return (
    <div className="app">
      <Header />
      <div className="buttons">
        <Button handleClick={toggleInfo} text="About me" />
        <Button handleClick={toggleGallery} text="My works" />
        <Button handleClick={toggleContact} text="Contact me" />
      </div>
      {show === "info" && <Info />}
      {show === "gallery" && <Gallery />}
      {show === "contact" && <Contact />}
      <img className="profileImage" src={MyImg} alt="me"/>
    </div>
  )
}

export default App
