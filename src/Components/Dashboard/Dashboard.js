import React, {Component} from "react"
import {connect} from "react-redux"


import {getRecipes,editRecipe,deleteRecipe} from "../../Actions/recipe";
import SideBar from "./SideBar"
import DisplayRecipes from "./DisplayRecipes";
import DashHeader from "./DashHeader"
import EditUserRecipes from "./LinksWithinDash/EditUserRecipes"
import "../../styles.css"
import "./LinksWithinDash/linksWithinDash.css"

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={
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
    handleSelectEdit = (recipe)=>{
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
        console.log(this.props.recipes)
        return(
            <div className="dashboard">
                <DashHeader redirect={this.redirect}/>
                    <div className="dashboardMain">
                        <SideBar />
                            <div>
                                <DisplayRecipes 
                                recipes={this.props.recipes}
                                editing={this.state.editing}
                                username={this.props.username}
                                handleSelectEdit={this.handleSelectEdit}
                                />

                                {this.state.editing?
                                    <EditUserRecipes 
                                        handleEditChange={this.handleEditChange}
                                        handleFinishEdit={this.handleFinishEdit}
                                        recipeToEdit={this.state.recipeToEdit}
                                        handleDeleteRecipe={this.handleDeleteRecipe}
                                    />
                                    :
                                    null
                                }
                            </div>
                </div>
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
)(Dashboard)