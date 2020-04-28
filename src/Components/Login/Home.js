import React, {Component} from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"

import {login} from "../../Actions/index"
import "../../styles.css"



class Home extends Component{

    constructor(){
        super()
        this.state = {
            login: {
                username: "",
                password: ""
            }
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
        console.log(this.state.login)
        console.log(this.state.login.password)
        this.props.login(this.state.login)
        this.props.history.push("/Dashboard")
    }


    render(){
        return(
            <div>
                    <Typography variant="h1" component="h2" gutterBottom>
                        RecipeMaker
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
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    error: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    {login}
)(Home);