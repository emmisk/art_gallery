import React, { useState } from "react"
import Button from "./Button"
import Paints from "./Paints"

const Gallery = () => {
  const [show, setShow] = useState(null)

  const togglePaints = () => (show === "paints" ? setShow(null) : setShow("paints"))
    return <main>
    <div className="buttons">
    <Button handleClick={togglePaints} text="paints & draws" />
  </div>
  {show === "paints" && <Paints />}
    </main>
  }

export default Gallery
