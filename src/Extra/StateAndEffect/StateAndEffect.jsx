import React from "react"
import WindowTracker from "./WindowTracker"
import "./StateAndEffect.css"

export default function StateAndEffect() {
    const [show, setShow] = React.useState(true)

    function toggleShow (){ 
        setShow ( prevShow => !prevShow)
    }



    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    return (
        <div className="container">
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}