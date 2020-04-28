import React,{Component} from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {register} from "../../Actions/index"

export class Register extends Component{
    constructor(){
        super()
        this.state = {
            register: {
                username: "",
                password: ""
            }
        }    
    }
    handleSubmit = () =>{
        register(this.state.register)
        this.props.history.push("/")
    }


    render(){
        return(
            <div>
                <header>
                    <body>
                        <form className="loginBox">
                            <TextField required id="standard-required" label="Username" />
                            <br/>
                            <TextField style={{paddingBottom: "10%"}} required id="standard-required" label="Password" />
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                        </form>
                    </body>
                </header>
            </div>
        )
    }
}