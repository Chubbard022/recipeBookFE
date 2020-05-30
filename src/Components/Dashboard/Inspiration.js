import React, {Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"


import {getInspiration} from "../../Actions/recipe"
import "../../styles.css"

class Inspiration extends Component{
    constructor(){
        super()
        this.state = {
            recipe: [],
            olderInspirationRecipes: []
        }
    }

    componentWillMount(){
        let test = this.props.getInspiration()
        console.log(test)
        // this.setState({
        //     ...state,
        //     recipe: this.props.getInspiration
        // })
    }


    render(){
        return(
            <div> 
                <Button 
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>
                <div>
                    
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