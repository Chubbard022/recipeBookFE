import React,{Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"

import {getRecipes} from "../../Actions/recipe"
import "../../styles.css"


function UserAccount (props){
    console.log("PROPS",props)
        return(
            <div>
                <Button
                    onClick={()=>props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>
            <div>
               { props.recipes.map(recipe=>{
                    return <div className="recipeListDisplay">
                        <p>{recipe.name}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                    </div>
                })}
            </div>


            </div>
        )
}

const mapStateToProps = (state) =>({
    recipes: state.recipes
})

export default connect(
    mapStateToProps,
    (getRecipes)
)(UserAccount)