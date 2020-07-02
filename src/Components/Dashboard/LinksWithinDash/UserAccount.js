import React,{Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"

import {getRecipes,editRecipe,deleteRecipe} from "../../../Actions/recipe"
import EditUserAccount from "./EditUserAccount"
import "./linksWithinDash.css"



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
                },
                editing: false
            }
        }
        componentDidMount() {
            this.props.getRecipes()
    
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
                },
                editing:true
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
            this.props.editRecipe(this.state.recipeToEdit)
            this.setState({
                ...this.state,
                editing: false,
                recipeToEdit:{
                    ...this.state.recipeToEdit,
                    id: 0,
                    name: "",
                    instructions: "",
                    ingredients: "",
                    username: ""
                },
            })
        }

        handleDeleteRecipe = () =>{
            this.props.deleteRecipe(this.state.recipeToEdit)
            this.setState({...this.state, editing: false})
        }
        
    render(){
        return(
            <div>
                <Button
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>
                

        {this.props.recipes? 
            ( <div className={this.state.editing? "vanish" : null}>
                        {this.props.recipes.map((recipe,index)=>{
                        if(recipe.username === this.props.username){
                        return <div className="recipeListDisplay" key={index}>
                            <p>{recipe.name}</p>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>

                            <Button 
                                onClick={()=>this.handleSelectEdit(recipe)}
                                variant="contained" 
                                color="primary" 
                                style={{fontSize: "8px",float:"right"}}
                                >Edit
                            </Button>
                        </div>
                    }})}
                </div>):null}

                {this.state.editing?
                    <EditUserAccount 
                        handleEditChange={this.handleEditChange}
                        handleFinishEdit={this.handleFinishEdit}
                        recipeToEdit={this.state.recipeToEdit}
                        handleDeleteRecipe={this.handleDeleteRecipe}
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