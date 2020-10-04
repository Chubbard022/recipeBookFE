import React from "react"
import Button from "@material-ui/core/Button"
import "./linksWithinDash.css"



function EditUserRecipes({handleEditChange,handleFinishEdit,recipeToEdit,handleDeleteRecipe}){
    return(
            <div className="editRecipeDisplay">
                <div className="editRecipeDisplayInput">
                    <p>Name:</p>
                    <input
                        name="name"           
                        value={recipeToEdit.name}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div className="editRecipeDisplayInput">
                    <p>ingredients:</p>
                    <input 
                        name="ingredients"
                        value={recipeToEdit.ingredients}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div className="editRecipeDisplayInput">
                    <p>Instructions:</p>
                    <input
                        name="instructions"
                        value={recipeToEdit.instructions}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>
                <div className="editRecipeButtons">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleFinishEdit}
                    >Done</Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleDeleteRecipe}
                    >Delete</Button>
                </div>
            </div>
    )
}

export default EditUserRecipes;