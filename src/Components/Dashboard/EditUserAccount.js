import React from "react"
import Button from "@material-ui/core/Button"
import "../../styles.css"



function EditUserAccount({editRecipe,handleEditChange,handleFinishEdit}){
    return(
            <div className="editRecipeDisplay">
                <div className="editRecipeDisplayInput">
                    <p>Name:</p>
                    <input           
                        value={editRecipe.name}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div className="editRecipeDisplayInput">
                    <p>ingredients:</p>
                    <input 
                        value={editRecipe.ingredients}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div className="editRecipeDisplayInput">
                    <p>Instructions:</p>
                    <input
                        value={editRecipe.instructions}
                        onChange={handleEditChange}
                        className="editRecipeInput editRecipeLastInput"
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
                        onClick={handleFinishEdit}
                    >Delete</Button>
                </div>
            </div>
    )
}

export default EditUserAccount