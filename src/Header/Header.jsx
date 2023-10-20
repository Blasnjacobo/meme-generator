import "./Header.css"
import phototroll from "./troll.png";

export default function Header(){
    return (
        <div className="header-class">
            <div className="meme-logo-title">
                <img className= "meme-logo" src={phototroll} alt="meme-logo"></img>
                <h1>Meme Generator</h1>
            </div>
            <p className="header-description">React Course - Project 3</p>
        </div>
    )
}