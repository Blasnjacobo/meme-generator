import "./EventListeners.css"

export default function EventListeners() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
    function handleOnMouseOver(){
        console.log("MouseOver")
    }
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" alt=""/>
            <button onClick={handleOnMouseOver}>Click me</button>
        </div>
    )
}
