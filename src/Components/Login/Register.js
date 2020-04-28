import React,{Component} from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"

import {register} from "../../Actions/index"
import "../../styles.css"


class Register extends Component{
    constructor(){
        super()
        this.state = {
            register: {
                username: "",
                password: ""
            }
        }    
    }
    handleChange = (e) =>{
        this.setState({
            register:{
                ...this.state.register,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = () =>{
        this.props.register(this.state.register)
        this.props.history.push("/")
    }

    render(){
        return(
            <div>
                <header>
                    <body>
                        <form className="loginBox">
                            <TextField  
                                type="text"
                                label="Username"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <br/>
                            <TextField 
                                type="password" 
                                style={{paddingBottom: "10%"}}
                                label="Password"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                        </form>
                    </body>
                </header>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    errorMessage: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    {register}
)(Register)