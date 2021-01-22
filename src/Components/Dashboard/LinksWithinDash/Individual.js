import React from "react"
import Button from '@material-ui/core/Button';
import "../../../styles/css/styles.css"


function Individual(props){
    return(
        <div>
            <Button 
                onClick={()=>props.handleRedirectSocialPage()}
                variant="contained" 
                color="primary" 
            >Back To User List</Button>           
            {props.userListRecipe.map((recipe,index)=>{
                return (
                    <div key={recipe[0]} className="userRecipe">
                        <p className="userRecipeDescription">Recipe Name: {recipe[1]}</p>
                        <p className="userRecipeDescription">Ingredients: {recipe[2]}</p>
                        <p className="userRecipeDescription"> Instructions: {recipe[3]}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Individual