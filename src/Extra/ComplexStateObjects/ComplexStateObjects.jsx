import "./ComplexStateObjects.css"
import React from "react"
import user from  "./user.png"
import Star from "./Star"

export default function ComplexStateObjects() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite(){
        setContact( prevCont => {
            return {
                ...prevCont,
            isFavorite: ! prevCont.isFavorite  
            }
        })
    }
       
    
    return (
        <main>
            <article className="card">
                <img src={user} className="card--image" alt=""/>
                <div className="card--info">
                    <Star handleClick={toggleFavorite} isFilled = {contact.isFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
