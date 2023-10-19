import React from "react";

const Body = (props) => {
    const { chars, reset, addScore, shuffle} = props

    //This is where we can put the shuffle function, 

    console.log("Body Refresh")

    const imClicked = (char) => {
        console.log(char.picked)
        if(char.picked) {
            chars.map((c) => {
                return c.picked = false
            })
            reset()
        }
        else {
            addScore()
            char.picked = true
            shuffle()
        }
        
    }

    return (
        <div className="gameBoard
        ">
            {chars.map((char) => {
                return(
                    <div onClick={() => imClicked(char)}>
                        <img src={char.img} alt={char.name}/>
                        <div key={char.name} id={char.name} >{char.name}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Body