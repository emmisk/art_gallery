import React from "react"

const Figure = ({ figure }) => (
  <figure>
    <img src={figure.src} alt={figure.alt} />
    <figcaption>{figure.caption}</figcaption>
  </figure>
)

export default Figure
