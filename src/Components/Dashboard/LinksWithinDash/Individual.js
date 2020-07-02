import React from "react"


function Individual(props){
    console.log("*****",props)
    return(
        <div>
            INDIVIDUAL
            {props.userListRecipe.map(recipe=>{
                return (
                    <div>
                        WORKING
                    </div>
                )
            })}
        </div>
    )
}

export default Individual