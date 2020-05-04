import React,{Component} from "react"
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import "../../styles.css"


export class RecipeMaker extends Component{
    constructor(){
        super()
        this.state={
            form: {
                name: "",
                ingredients: [],
                instructions: "",
                cookingTime: ""
            }
        }
    }

    handleSubmit = () =>{
        axios.get()
    }


    render(){
        return(
            <div className="recipeForm">
                <form>
                    <TextField
                    id="standard-name"
                    label="recipe Name"
                    // value={0}
                    // onChange={handleChange('name')}
                    margin="normal"
                    />

                    <br/>

                    <TextField
                    id="standard-name"
                    label="Ingredient List"
                    // value={0}
                    // onChange={handleChange('name')}
                    margin="normal"
                    />

                    <br/>

                    <TextField
                    id="standard-name"
                    label="Instructions"
                    // value={0}
                    // onChange={handleChange('name')}
                    margin="normal"
                    />
                </form> 
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Create Recipe</Button>
            </div>
        )
    }
}