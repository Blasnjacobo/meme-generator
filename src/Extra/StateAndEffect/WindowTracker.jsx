import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)


    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])    
            // setwindowWith(window.innerWidth)
            //If i turnoff the window tracker component or stop it for rendering and run the resize event we get a memory leak error

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}