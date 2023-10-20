import star from "./starempty.png"
import starfilled from "./starfilled.png"

export default function Star(props){
    let starIcon = props.isFilled ? starfilled : star
    return (
        <img 
        src={starIcon} 
        className="card--favorite"
        //   onClick={toggleFavorite}
        alt=""
        onClick={props.handleClick}
    />)
    
}