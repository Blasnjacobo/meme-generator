import React from "react"
import "./UseStateExample.css"

export default function UseStateExample() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState() 
     */
    const [result, setResult] = React.useState("YEAP")
    //Result FOR React.useState("OF COURSE"): ["YEAP", f()]

    function handleClick() {
        setResult("NO");
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
    )
}