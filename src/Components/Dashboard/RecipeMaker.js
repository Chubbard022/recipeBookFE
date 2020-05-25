import React, {Component} from "react"
import {connect} from "react-redux"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import {createRecipe} from "../../Actions/recipe"
import "../../styles.css"

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
            form : {
                name: "",
                ingredients: "",
                instructions: "",
                username : ""
            }
        }
    }
    componentDidMount(){
       this.setState({
           form: {
               ...this.state.form,
               username: this.props.username
           }
       })
    }

    handleChange = (e) => {
        this.setState({ 
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })  
    }
    successMessage = () =>{
        this.setState({
            ...this.state,
            successMessage: ""
        })
    }

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
    username: state.username
})
export default connect(
    mapStateToProps,
    {createRecipe}
)(RecipeMaker);
