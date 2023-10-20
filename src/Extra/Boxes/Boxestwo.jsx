import React from "react"
import BoxesData from "./BoxesData"
import Boxtwo from "./Boxtwo"
import "./Boxes.css"

export default function Boxestwo() {
    const [squares, setSquares] = React.useState(BoxesData)
    /////////////////////////////////////////////        THIS TECHNIQUE IS MORE IMPERATIVE          //////////////////////////////////
   /* function toggle(id){
        setSquares( prevSquare =>{
            const newSquares = []
        for(let i=0; i<prevSquare.length;i++){
            const currentSquare = prevSquare[i]
            if (currentSquare.id === id){
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else{
                newSquares.push(currentSquare)
            }
        }
        return newSquares;
        }
            )}
            const squareElements = squares.map(square => (
        <Boxtwo 
            key={square.id}
            id ={square.id} 
            on={square.on}
            toggle = {toggle} 
        />
    ))
   
   */ 

/////////////////////////////////////////////        THIS TECHNIQUE IS MORE DECLARATIVE           //////////////////////////////////

function toggle(id)
{
    setSquares( prevSquare => {
        return prevSquare.map((square) =>{
            return square.id === id ? {...square, on: !square.on} : square
        }

        )
    }

    )
}


const squareElements = squares.map(square => (
    <Boxtwo 
        key={square.id}
        id ={square.id} 
        on={square.on}
        toggle = { () => toggle(square.id)} 
    />
))

    return (
        <main>
            {squareElements}
        </main>
    )
}
