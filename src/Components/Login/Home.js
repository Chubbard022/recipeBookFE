import React, {Component} from "react"
import {connect} from "react-redux"

import {TextField} from "../../CustomElements/Textfield"
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
                password: "",
            },
            errorMessage: "",
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
        if(this.state.login.username === "" && this.state.login.username === ""){
            this.setState({...this.state, errorMessage: "please enter username and password"})
        }else{
            this.props.login(this.state.login)
            this.setState({clickedLogin:true})
            let token = localStorage.getItem("jwt")

        this.handleRedirect(token)
    }
    }
    handleRedirect(token){
        console.log("TOKEN",token)
        if((token)){
            this.setState({...this.state, clickedLogin: false})
            this.setState({...this.state, errorMessage:""})
            this.props.history.push("/dashboard")
        }
        else{
            this.setState({...this.state, errorMessage: "No User Found With Matching Username & Password"})
        }
    }

    render(){
        return(
            <div className="loginScreen">
                    <Typography variant="h1" component="h2" gutterBottom>
                        RecipEase
                    </Typography>
                    <form className="loginBox">
                            <div className={this.state.errorMessage? "loginError": null}>
                                {this.state.errorMessage}
                            </div>
                            <TextField 
                                required id="standard-required" 
                                placeholder="Username" 
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <br/>
                            <TextField 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                onChange={this.handleChange}
                            />
                            <br/>
                            <Button style={{fontSize: "22px", marginTop: "4%"}} variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                            <p style={{fontSize: "22px"}}>if not registered, please click 
                                <a className="registerRedirect" onClick={()=>this.props.history.push("/register")}> here</a>
                            </p>
                        </form> 
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





