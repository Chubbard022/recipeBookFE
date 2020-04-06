import React, {Component} from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../styles.css"

import {DashBoard} from "./Dashboard/Dashboard"




export class Home extends Component{

    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }


    render(){
        return(
            <div>
                <header>
                    <Typography variant="h1" component="h2" gutterBottom>
                        RecipeMaker
                    </Typography>
                    <body>
                        <form className="loginBox">
                        <TextField required id="standard-required" label="Username" />
                        <br/>
                        <TextField style={{paddingBottom: "10%"}} required id="standard-required" label="Password" />
                        <br/>
                        <Button variant="contained" color="primary">Submit</Button>
                        </form>
                    </body>
                </header>
            </div>
        )
    }
}