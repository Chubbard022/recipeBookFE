import React, {Component} from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from "axios"

import "../../styles.css"








export class Home extends Component{

    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = () =>{
        //handle axios request to send username and password to backend 
        this.props.history.push("/Dashboard")
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
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                            <p>if not registered, please click <a onClick={()=>this.props.history.push("/register")}>here</a></p>
                        </form>
                    </body>
                </header>
            </div>
        )
    }
}