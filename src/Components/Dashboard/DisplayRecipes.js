import React from "react";

import Button from "@material-ui/core/Button"


import NoRecipes from "./NoRecipes"

const DisplayRecipes = (props) =>{

    const UserHasReciper = () =>{
        let foundUser = false;
        for(let i=0; i<props.recipes.length;i++){
            if(props.recipes[i].username === props.username){
                foundUser = true;
            }
        }
        return foundUser;
    }

    return(
        <React.Fragment>
            {props.recipes && UserHasReciper()?
                ( <div className={props.editing? "vanish" : null}>
                    {props.recipes.map((recipe,index)=>{
                        if(recipe.username === props.username){
                            return <div className="recipeListDisplay" key={index}>
                                        <p>{recipe.name}</p>
                                        <p>{recipe.ingredients}</p>
                                        <p>{recipe.instructions}</p>
                
                                        <Button 
                                            onClick={()=>props.handleSelectEdit(recipe)}
                                            variant="contained" 
                                            color="primary" 
                                            style={{fontSize: "8px",float:"right"}}
                                            >Edit
                                        </Button>
                                    </div>
                        }
                        })
                    }

                </div>
            ):  <NoRecipes/>
            
            }

        </React.Fragment>
    )
}

export default DisplayRecipes;