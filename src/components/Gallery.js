import React from "react"
import Figure from "./Figure"
import { figures } from "../figures"

const Gallery = () => {
  const figureComponents = figures.map((figure) => (
    <Figure key={figure.id} figure={figure} />
  ))

  return <main>{figureComponents}</main>
}

export default Gallery
