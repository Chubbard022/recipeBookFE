import React, {Component} from "react"
import {connect} from "react-redux"
import Button from "@material-ui/core/Button"
import {getInspiration} from "../../Actions/inspiration"
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
        
        }

    test = () =>{
        this.props.getInspiration()
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
                    <button onClick={this.test}>TEST</button>
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