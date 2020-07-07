import React, {Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"
import {getInspiration} from "../../../Actions/inspiration"
import "./linksWithinDash.css"

class Inspiration extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }

    componentDidMount(){
            this.props.getInspiration()
        }
    handleDropDown = (item) =>{
        console.log(item)
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
               <div className="inspoRecipeContainer">
                    {this.props.inspirationRecipes.map((item,index)=>{
                        return(
                            <div key={index} className="inspoRecipe">
                                <img src={item.image} alt={item.name}/>
                                <p>{item.name}</p>
                                {/* <p>Ingredients : {item.ingredients}</p>
                                <p>Instructions : {item.instructions}</p> */}
                                <button 
                                    onClick={()=>this.handleDropDown(item)}
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
    {getInspiration}
)(Inspiration)