import React,{Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"

import {getRecipes,editRecipe,deleteRecipe} from "../../Actions/recipe"
import EditUserAccount from "./EditUserAccount"
import "../../styles.css"



class UserAccount extends Component{
        constructor(props){
            super(props)
            this.state={
                personalRecipes: [],
                recipeToEdit: {
                    id: 0,
                    name: "",
                    instructions: "",
                    ingredients: "",
                    username: this.props.username
                }
            }
        }
        componentDidMount() {
            this.props.getRecipes()
            let filterRecipes = this.props.recipes.filter(recipe=> recipe.username == this.props.username)
            this.setState({...this.state,personalRecipes:filterRecipes})
        }
        handleSelectEdit(recipe){
            this.setState({
                ...this.state,
                recipeToEdit:{
                    ...this.state.recipeToEdit,
                    id: recipe.id,
                    name: recipe.name,
                    instructions: recipe.instructions,
                    ingredients: recipe.ingredients
                }
            })
        }
        handleEditChange = (e) =>{
            this.setState({
                ...this.state,
                recipeToEdit:{
                    ...this.state.recipeToEdit,
                    [e.target.name]: e.target.value            
            }})

        }
        handleFinishEdit = () =>{
            let temp = {
                "id": 4,
                "name": "EARL",
                "ingredients": "the",
                "instructions": "CAR",
                "username": ""
            }
            this.props.editRecipe(temp)
            this.setState({
                ...this.state, 
                recipeToEdit:{
                    id: 0,
                    name: "",
                    instructions: "",
                    ingredients: "",
                    username: ""
                }
            })
            this.props.getRecipes()
        }

        render(){
        return(
            <div>
                <Button
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>

                
                <div className={this.state.recipeToEdit.name? "vanish" : null}>
                    {this.state.personalRecipes.map((recipe,index)=>{
                        return <div className="recipeListDisplay" key={index}> 
                            <p>{recipe.name}</p>
                            <p>{recipe.instructions}</p>
                            <p>{recipe.ingredients}</p>

                            <Button 
                                onClick={()=>this.handleSelectEdit(recipe)}
                                variant="contained" 
                                color="primary" 
                                style={{fontSize: "8px",float:"right"}}
                                >Edit
                            </Button>
                        </div>
                    })}
                </div>
                {this.state.recipeToEdit.name?
                    <EditUserAccount 
                        handleEditChange={this.handleEditChange}
                        handleFinishEdit={this.handleFinishEdit}
                        recipeToEdit={this.state.recipeToEdit}
                    />
                    :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    recipes: state.recipes,
    username: state.username
})

export default connect(
    mapStateToProps,
   {getRecipes,editRecipe,deleteRecipe}
)(UserAccount)