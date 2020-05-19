import React,{Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"

import {getRecipes} from "../../Actions/recipe"
import "../../styles.css"
import { filter } from "dom-helpers";


class UserAccount extends Component{
        constructor(props){
            super(props)
            this.state={
                personalRecipes: []
            }
        }
        componentDidMount() {
            let filterRecipes = this.props.recipes.filter(recipe=> recipe.username == this.props.username)
            this.setState({...this.state,personalRecipes:filterRecipes})
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
            {/* <div>
                { props.recipes.filter(recipe=>{
                    if(recipe.username == props.username){
                        return( <div className="recipeListDisplay">
                            <p>{recipe.name}</p>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>
                        </div>)
                    }
                })}
            </div> */}


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