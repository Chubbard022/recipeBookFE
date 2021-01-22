import React,{Component} from "react"
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"

import {TextField,Form,PageTitle} from "../../CustomElements/Textfield"
import {register} from "../../Actions/index"
import "../../styles/css/styles.css"


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
        this.props.history.push("/login")
    }

    render(){
        return(
            <div className="registerPage">
                <PageTitle>Register</PageTitle>
                <Form>
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
                </Form>
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