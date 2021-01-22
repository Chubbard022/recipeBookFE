import React, {Component} from "react"
import star from "../../../images/star.png"
import {connect} from "react-redux"
import {favoriteRecipe,removeFavorite} from "../../../Actions/addFavorite"
import favorite from "../../../images/favorite.png"
import "../../../styles/css/styles.css"


class Favorited extends Component{
    constructor(props){
        super(props)
        this.state={
            favorited: this.props.recipe.favorited
        }
    }

    handleFavoriting = (recipe) =>{
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
        this.setState({favorited: !this.state.favorited})
    }
    render(){
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

