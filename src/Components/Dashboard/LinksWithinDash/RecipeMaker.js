import React, {Component} from "react"
import {connect} from "react-redux"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {createRecipe} from "../../../Actions/recipe"
import {getCategory} from "../../../Actions/category"
import "./linksWithinDash.css"

//overriding default theme 
const theme = createMuiTheme({
    overrides: {
    // Style sheet name ⚛
    MuiInput: {
        // Name of the rule
        input: {
        // Some CSS
        height: "200",
        fontSize: "3em",
        padding:"10%",
        fontSize: "25px"
        },
    },
    MuiButton: {
        text: {
            border:"3px solid red"
        }
    }
    },
});
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
                username : ""
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
                }
            })  
        }
        setTimeout(this.successMessage,3000)
    }
    //handling click for dropdown menu
    handleClick = (event) =>{
        console.log(event.currentTarget)
        this.setState({...this.state, anchorEl: event.currentTarget})
        console.log(this.state)
    }
    //handle closing the dropdown menu
    handleClose = () =>{
        this.setState({...this.state,anchorEl:null})
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
            <div className="recipeForm">
                <ThemeProvider theme={theme}>
                    <form>
                        <TextField
                            id="standard-name"
                            label="recipe Name"
                            name="name"
                            value={this.state.form.name}
                            onChange={this.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Ingredient List"
                            name="ingredients"
                            value={this.state.form.ingredients}
                            onChange={this.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>
                        <TextField
                            id="standard-name"                        
                            label="Instructions"
                            name="instructions"
                            value={this.state.form.instructions}
                            onChange={this.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>                        
                        <TextField
                            id="standard-name"
                            label="Category Name"
                            name="ingredients"
                            value={this.state.form.ingredients}
                            onChange={this.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>                        
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            list of categories
                        </Button>
                        <Menu
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                        {/* NEED TO CHANGE TO WHAT CATEGORIES ARE ALREADY MADE */}
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </form> 
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleSubmit}
                        style={{marginTop: "5%",fontSize:"16px"}}
                    >Create Recipe</Button>
                </ThemeProvider>
            </div>
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
