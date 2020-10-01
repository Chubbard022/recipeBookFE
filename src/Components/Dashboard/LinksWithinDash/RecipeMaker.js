import React, {Component} from "react"
import {connect} from "react-redux"

import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';

import {createRecipe} from "../../../Actions/recipe";
import {getCategory} from "../../../Actions/category";
import FormRecipeMaker from "./FormRecipeMaker";
import "./linksWithinDash.css"

class RecipeMaker extends Component{
    constructor(props){
        super(props)
        this.state={
            successMessage: "",
            anchorEl: null,
            form : {
                name: "",
                ingredients: "",
                instructions: "",
                username : "",
                category: ""
            },
            categories: []
        }
    }
    //setting state when page loads
    componentDidMount(){
        this.props.getCategory()
    this.setState({
        form: {
            ...this.state.form,
            username: this.props.username
        },
        categories: this.props.categories
    })
    }
    // handles change within text boxes
    handleChange = (e) => {
        this.setState({ 
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })  
    }
    //handles success message seen after creating new recipe
    successMessage = () =>{
        this.setState({
            ...this.state,
            successMessage: ""
        })
    }
    // handles submitting a new recipe
    handleSubmit = (e) =>{
        e.preventDefault()
        if((this.state.form.name !== "") && (this.state.form.instructions !== "") && (this.state.form.ingredients !== "")){
            this.props.createRecipe(this.state.form)
            this.setState({ 
                ...this.state,
                successMessage: "Successfully Created Recipe",
                form : {
                    ...this.state.form,
                    name: "",
                    ingredients: "",
                    instructions: "",
                    category: ""
                }
            })  
        }
        setTimeout(this.successMessage,3000)
    }
    //handling click for dropdown menu
    handleOpenCategory = (event) =>{
        this.setState({...this.state, anchorEl: event.currentTarget})
    }
    //handle closing the dropdown menu
    handleClose = (clickedCategory) =>{
        
        this.setState({
            ...this.state,
            anchorEl:null,
            form:{
                ...this.state.form,
                category: clickedCategory.name
            }
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
            {
                (this.state.successMessage)? (
                <div className="successfullyCreate">
                    <Alert severity="success">
                        <AlertTitle><strong>Success</strong></AlertTitle>
                        successfully created recipe
                    </Alert>
                </div>
                ):
                null
            }
            <FormRecipeMaker 
                form={this.state.form}
                handleChange={this.handleChange}
                anchorEl={this.state.anchorEl}
                handleClose={this.handleClose}
                categories={this.state.categories}
                handleOpenCategory={this.handleOpenCategory}
                handleSubmit={this.handleSubmit}
            />
        </div>
        )
    }
}

const mapStateToProps = (state) =>({
    username: state.username,
    categories: state.categories
})
export default connect(
    mapStateToProps,
    {createRecipe,getCategory}
)(RecipeMaker);
