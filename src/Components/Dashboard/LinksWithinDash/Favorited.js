import React, {Component} from "react"
import star from "../../../images/star.png"
import {connect} from "react-redux"
import {favoriteRecipe,removeFavorite} from "../../../Actions/addFavorite"
import favorite from "../../../images/favorite.png"
import "../LinksWithinDash/linksWithinDash.css"



class Favorited extends Component{
    constructor(props){
        super(props)
        this.state={
            favorited: this.props.recipe.favorited
        }
    }

    handleFavoriting = (recipe) =>{
        console.log("_________",recipe)
        let newFavoritedRecipe = {
            id: recipe.id,
            image: recipe.image,
            instructions: recipe.instructions,
            name: recipe.name,
            ingredients: recipe.ingredients,
            username: this.props.username,
            favorited: !recipe.favorited
        }

        this.props.favoriteRecipe(newFavoritedRecipe)        
        this.props.favoriteRecipe(newFavoritedRecipe)
        this.setState({favorited: !this.state.favorited})
    }

    checkIfFavorited = (recipe) =>{
        //if has image, then is from insperation
        this.props.favorited.map(favRecipe=>{
            console.log("******",favRecipe.name,recipe.name)
            if(favRecipe.name === recipe.name){
                console.log(true) 
            }
        })
        console.log(false)
    }


    render(){
        // console.log(this.props.recipe)
        return(
            <img id="favoriteRecipe" onClick={()=>this.handleFavoriting(this.props.recipe)} src={this.state.favorited? favorite : star} alt="bordered star"/>
        )
    }
}
const mapStateToProps = state =>({
    inspirationRecipes: state.inspirationRecipes,
    favorited: state.favorited,
    recipes: state.recipes,
    username: state.username
})

export default connect(
    mapStateToProps,
    {favoriteRecipe,removeFavorite}
)(Favorited)

