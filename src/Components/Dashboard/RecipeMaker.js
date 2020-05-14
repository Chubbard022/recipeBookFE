import React,{Component} from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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

export class RecipeMaker extends Component{
    constructor(props){
        super(props)
        this.state={
            form: {
                name: "",
                ingredients: [],
                instructions: "",
                cookingTime: "",
            }
        }
    }


    render(){
        return(
            <div>
            <Button 
                onClick={()=>this.props.history.push("/dashboard")}
                variant="contained" 
                color="primary" 
            >Back To Dashboard</Button>

            <div className="recipeForm">
             <ThemeProvider theme={theme}>
                <form>
                    <TextField
                    id="standard-name"
                    label="recipe Name"
                    // value={0}
                    // onChange={handleChange('name')}
                    margin="normal"
                    className="formInputField"
                    />

                    <br/>

                    <TextField
                    id="standard-name"
                    label="Ingredient List"
                    // value={0}
                    // onChange={handleChange('name')}
                    margin="normal"
                    className="formInputField"
                    />

                    <br/>

                    <TextField
                    label="Instructions"
                    // value={0}
                    // onChange={handleChange('name')}
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
