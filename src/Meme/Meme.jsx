import React from "react";
import "./Meme.css";
//import memesData from "./memesData.jsx"

export default function Meme(){
    let [meme, setMeme] = React.useState(
        {
            topText: "",
            BottonText: "",
            randomImage: "https://www.lavanguardia.com/andro4all/hero/2023/03/shrek.jpg?width=1200"
        });
    //setmemeImage does the operation while memeImage retrives the result of the operation
    
function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => {
        return{
            ...prevMeme,
            [name]: value
        }
    })
}


    let [allMemeImages, setAllMemeImages] = React.useState([]) //It is empty before calling the API
    
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(data => setAllMemeImages(data.data.memes))  //Now we have an array with all images info
    }, []) 

    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme ( prevMeme => {
            return{
            ...prevMeme,
            randomImage: url}
            })
    }
    
    //let resultantMeme = memeImage();

    return (
        <div className="meme-class">
            <div className="inputs-meme">
                <input type="text" className="input-meme" placeholder="Upper text" name="topText" onChange={handleChange} value={meme.topText}/>
                <input type="text" className="input-meme" placeholder="Bottom text" name="BottonText" onChange={handleChange} value={meme.BottonText}/>
            </div>
            <button className="button-meme" onClick={getMemeImage}>Get a new meme image 🎨</button>
            <div className="meme">
                <img alt="" src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.BottonText}</h2>
            </div>
        </div>
    )
}