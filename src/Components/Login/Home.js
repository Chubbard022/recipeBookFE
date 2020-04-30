import React, {Component} from "react"
import {connect} from "react-redux"

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import {login} from "../../Actions/index"
import "../../styles.css"



class Home extends Component{

    constructor(){
        super()
        this.state = {
            login: {
                username: "",
                password: ""
            },
            clickedLogin: false
        }
    }    
    handleChange = (e) =>{
        this.setState({
            login:{
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = () =>{
        this.props.login(this.state.login)
        this.setState({...this.state,clickedLogin:true})
        
    }
    handleRedirect(){
        let token = localStorage.getItem("jwt")



        if((token) && (this.state.clickedLogin === true)){
            this.setState({...this.state, clickedLogin: false})
            this.props.history.push("/dashboard")
        }
        if(this.props.error){
            console.log("ERROR")
            return(
                <div className="loginErrorMessage" elevation={6} variant="filled">
                    ERROR NO user
                </div>
            )
        }
    }

    render(){
        console.log(this.state.clickedLogin)
        return(
            <div>
                    <Typography variant="h1" component="h2" gutterBottom>
                        RecipEase
                    </Typography>
                        <form className="loginBox">
                            <TextField 
                                required id="standard-required" 
                                label="Username" 
                                type="text"
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
                            <p>if not registered, please click 
                                <a className="registerRedirect" onClick={()=>this.props.history.push("/register")}> here</a>
                            </p>
                        </form>
                        {this.handleRedirect()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    error: state.error,
    message: state.message,
})

export default connect(
    mapStateToProps,
    {login}
)(Home);