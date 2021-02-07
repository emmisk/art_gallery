import React from "react"
import Figure from "./Figure"
import { figures } from "../figures"
import Button from "./Button"

const Paints = () => {
    const figureComponents = figures.map((figure) => (
    <Figure key={figure.id} figure={figure} />
    ))
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    return <main>
        {figureComponents}
    <Button handleClick={scrollTop} text="Scroll top" />
    </main>
    }

export default Paints