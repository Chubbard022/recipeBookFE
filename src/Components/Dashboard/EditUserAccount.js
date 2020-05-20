import React from "react"
import Button from "@material-ui/core/Button"
import "../../styles.css"



function EditUserAccount({editRecipe,handleEditChange,handleFinishEdit}){
    return(
        <React.Fragment>
            <div className="editRecipeDisplay">
                <div >
                    <p>Name:</p>
                    <input           
                        value={editRecipe.name}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div>
                    <p>ingredients:</p>
                    <input 
                        value={editRecipe.ingredients}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>

                <div>
                    <p>Instructions:</p>
                    <input
                        value={editRecipe.instructions}
                        onChange={handleEditChange}
                        className="editRecipeInput"
                    />
                </div>
            </div>
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleFinishEdit}
            >Done</Button>
        </React.Fragment>
    )
}

export default EditUserAccount