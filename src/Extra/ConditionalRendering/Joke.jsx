import React from "react"
import "./ConditionalRendering.css"


// THE && COMPARISON IS BETTER TO DISPLAY WHEN YOU WANT SOMETHING TO DISPLAY OR NOT, AND TERNARY WHEN YOU WANT TO DISPLAY BETWEEN 2 OBJETS


export default function Joke(props) {

    /*////////////////////////////////////////////                 PRACTICE 1                 ///////////////////////////////////////
    const [isShown, setIsShown] = React.useState(false)
    
    
    // eslint-disable-next-line no-unused-vars
    function Toggle(){
        setIsShown( prevShown => !prevShown)}
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <h3>{props.punchline}</h3>}
            <button onClick={Toggle}>{isShown ? "Hide": "Show"} punchline</button>
            <hr />
        </div>
    ) 
    
    
    */
    //////////////////////////////////////////////                 PRACTICE 2                ///////////////////////////////////////
    
    // eslint-disable-next-line no-unused-vars
    const [messages, setMessages] = React.useState(["d","D"])
    
     //Challenge:
      /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
     
    return (
        <div>
        {   
            messages.length === 0 ? <h1>You are all caught up!</h1> :
            <h1>You have {messages.length} unread {messages > 1 ? "messages" : "message"}</h1>
        } 
        </div>
    )
    
} 


/*
1. What is "conditional rendering"?
When we want to display something on the page based on a condition of some sort 


2. When would you use &&?
When you want to either display something or NOT display it


3. When would you use a ternary?
When you need to decide which thing amoung 2 options to display


4. What if you need to decide between > 2 options on
   what to display?
Use an if else if else conditional or a switch statement.


   */