import React, {Component} from "react"
import star from "../../../images/star.png"
import {connect} from "react-redux"
import favorite from "../../../images/favorite.png"
import "../LinksWithinDash/linksWithinDash.css"



class Favorited extends Component{
    constructor(props){
        super(props)
        this.state={
            clicked: false
        }
    }
    clickedStar = (recipe) =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
                <img id="favoriteRecipe" onClick={this.clickedStar} src={this.state.clicked? favorite : star} alt="bordered star"/>
        )
    }
}
const mapStateToProps = (state) =>({

})

export default connect (
    mapStateToProps,
    {}
)(Favorited)

//instead of local state, call the getFavorite and see if favorite is true or not for image