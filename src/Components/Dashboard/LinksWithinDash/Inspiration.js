import React, {Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"
import {getInspiration,dropDownInspoRecipe} from "../../../Actions/inspiration"
import "./linksWithinDash.css"

class Inspiration extends Component{
    constructor(){
        super()
        this.state = {
           inspirationRecipeList: []
        }
    }

    componentDidMount(){
            this.props.getInspiration()
           let updatedList =  this.props.inspirationRecipes.map(recipe=>{
                return {...recipe, clicked:false}
            })
            this.setState({
                ...this.state,
                inspirationRecipeList: updatedList
            })
        }

    render(){
        return(
            <div> 
                <Button 
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>

                <div className="inspoRecipeContainer">
                    {this.props.inspirationRecipes.map((item,index)=>{
                        return(
                            <div key={index} className="inspoRecipe">
                                <img src={item.image} alt={item.name}/>
                                <p className={item.clicked? "inspoTitleClicked" : "inspoTitle"}>{item.name}</p>
                                {item.clicked?
                                    <div>
                                        <p>Ingredients {item.ingredients}</p>
                                        <p>Instructions {item.instructions}</p>
                                    </div>
                                :null}
                                <button 
                                    className="InspoButton"
                                    onClick={()=>this.props.dropDownInspoRecipe(item,this.props.inspirationRecipes)}
                                >V</button>
                            </div>)
                    })}
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    inspirationRecipes: state.inspirationRecipes
})

export default connect(
    mapStateToProps,
    {getInspiration,dropDownInspoRecipe}
)(Inspiration)