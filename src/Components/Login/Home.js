import React, {Component} from "react"
import {connect} from "react-redux"
import Button from '@material-ui/core/Button';

import {TextField,Form,PageTitle} from "../../CustomElements/Textfield"
import {login} from "../../Actions/index"
import "../../styles/css/styles.css"

class Home extends Component{

    constructor(){
        super()
        this.state = {
            login: {
                username: "",
                password: "",
            },
            errorMessage: "",
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
    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.state.login.username === "" && this.state.login.username === ""){
            this.setState({...this.state, errorMessage: "please enter username and password"})
        }
        else{
            this.props.login(this.state.login)
            .then(()=>this.props.message? this.props.history.push("/dashboard") :this.setState({...this.state, errorMessage: "Could not Find match with provided Username & Password "}))
            .catch((err)=>console.log("ERR",err))
        }
    }
    render(){
        return(
            <div >
                <PageTitle>Login</PageTitle>
                    <Form>
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
                            <p style={{fontSize: "22px",paddingTop:"2%"}}>if not registered, please click 
                                <a className="registerRedirect" onClick={()=>this.props.history.push("/register")}> here</a>
                            </p>
                    </Form> 
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





