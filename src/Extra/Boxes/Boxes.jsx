import BoxesData from "./BoxesData"
import React from "react"
import "./Boxes.css"
import Box from "./Box"

export default function Boxes() {
    const [squares, setSquares] = React.useState(BoxesData)


    const squareElements = squares.map(square => (
        <Box On = {square.on} key={square.id}/>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}