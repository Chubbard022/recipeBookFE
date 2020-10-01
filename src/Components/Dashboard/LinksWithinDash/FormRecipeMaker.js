import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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


const FormRecipeMaker = (props) => {
    return(
        <React.Fragment>
                        <div className="recipeForm">
                <ThemeProvider theme={theme}>
                    <form>
                        <TextField
                            id="standard-name"
                            label="recipe Name"
                            name="name"
                            value={props.form.name}
                            onChange={props.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Ingredient List"
                            name="ingredients"
                            value={props.form.ingredients}
                            onChange={props.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>
                        <TextField
                            id="standard-name"                        
                            label="Instructions"
                            name="instructions"
                            value={props.form.instructions}
                            onChange={props.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>                        
                        <TextField
                            id="standard-name"
                            label="Category Name"
                            name="ingredients"
                            value={props.form.category}
                            onChange={props.handleChange}
                            margin="normal"
                            className="formInputField"
                        />
                        <br/>                        
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={props.handleOpenCategory}>
                            list of categories
                        </Button>
                        <Menu
                            anchorEl={props.anchorEl}
                            keepMounted
                            open={Boolean(props.anchorEl)}
                            onClose={props.handleClose}
                        >
                        {props.categories.map(category=>{
                                return(
                                    <MenuItem key={category.id} onClick={()=>props.handleClose(category)}>{category.name}</MenuItem>
                                )
                            })}
                        {/* NEED TO CHANGE TO WHAT CATEGORIES ARE ALREADY MADE */}
                        </Menu>
                    </form> 
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={props.handleSubmit}
                        style={{marginTop: "5%",fontSize:"16px"}}
                    >Create Recipe</Button>
                </ThemeProvider>
            </div>
        </React.Fragment>
    )
}

export default FormRecipeMaker;