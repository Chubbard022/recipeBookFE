import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button"

import {getRecipes} from "../../Actions/recipe"
import EditUserAccount from "./EditUserAccount"
import "../../styles.css"



class UserAccount extends Component{
        constructor(props){
            super(props)
            this.state={
                personalRecipes: [],
                editRecipe: [],
                edit: false
            }
        }
        componentDidMount() {
            let filterRecipes = this.props.recipes.filter(recipe=> recipe.username == this.props.username)
            this.setState({...this.state,personalRecipes:filterRecipes})
        }
        handleSelectEdit(recipe){
            let temp = []
            temp.push(recipe)
            this.setState({
                ...this.state,
                editRecipe:temp,
                edit: !this.state.edit
            })
            
        }
        handleEditChange = () =>{
            console.log("WORKS")
        }
        handleFinishEdit = () =>{
            let temp = []
            this.setState({...this.state, editRecipe:temp})
        }

        render(){
            console.log(this.state)
        return(
            <div>
                <Button
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>

                <div className={this.state.editRecipe[0]? "vanish" : null}>
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
                {this.state.editRecipe[0]?
                    <EditUserAccount 
                        editRecipe={this.state.editRecipe[0]} 
                        edit={this.state.edit}
                        handleEditChange={this.handleEditChange}
                        handleFinishEdit={this.handleFinishEdit}
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
    (getRecipes)
)(UserAccount)