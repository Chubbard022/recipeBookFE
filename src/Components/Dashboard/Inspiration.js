import React, {Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"
import {getInspiration} from "../../Actions/inspiration"
import "../../styles.css"

class Inspiration extends Component{
    constructor(){
        super()
        this.state = {
            InspirationRecipes: []
        }
    }

    componentWillMount(){
            this.props.getInspiration()
            this.setState({
                ...this.state,
                InspirationRecipes: [...this.props.inspirationRecipes]
            })
        }
    handleDropDown = (e,item) =>{
        e.preventDefault()
        console.log("item")
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
                    {this.state.InspirationRecipes.map((item,index)=>{
                        return(
                            <div key={index} className="inspoRecipe">
                                <img src={item.image} alt={item.name}/>
                                <p>{item.name}</p>
                                {/* <p>Ingredients : {item.ingredients}</p>
                                <p>Instructions : {item.instructions}</p> */}
                                <button 
                                    onClick={this.handleDropDown(e,item)}
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