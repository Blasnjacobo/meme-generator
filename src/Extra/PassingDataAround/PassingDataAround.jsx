import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function PassingDataAround() {
    const [user, setUser] = React.useState("Joe")
    return (
        <main>
            <Header newUser = {user}/>
            <Body newUser = {user}/>
        </main>
    )
}
