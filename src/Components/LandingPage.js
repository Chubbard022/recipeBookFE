import React,{Component} from "react"
import Typography from '@material-ui/core/Typography';
import {TextField} from "../CustomElements/Textfield"
import Button from "@material-ui/core/Button"
import * as image from "../images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg"
import {register} from "../Actions/index"
import {connect} from "react-redux"
import "../styles/css/styles.css"



class LandingPage extends Component {
    constructor(props){
        super()
        this.state={
            register: {
                username: "",
                password: ""
            }
        }

    }
    handleRedirect = () =>{
        this.props.history.push("/login")
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
        console.log(this.state)
        this.props.register(this.state.register)
        this.props.history.push("/login")
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <Typography className="landingPageName" variant="h3" gutterBottom style={{color:"white"}}>
                            RecipEase
                        </Typography>
                        
                        <form className="registerBox">
                            <h2 className="registerBoxText">Register A new Account</h2>
                                <TextField  
                                    required id="standard-required" 
                                    placeholder="Username" 
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                />
                                <TextField 
                                    type="password" 
                                    placeholder="Password" 
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <div className="landingPageButtons">
                                    <Button style={{fontSize: "14px", marginTop: "8%", boxSizing:" border-box"}} 
                                            variant="contained" color="primary" 
                                            onClick={this.handleSubmit}>Submit</Button>
                                    <Button style={{paddingRight: "3%",fontSize: "14px", marginTop: "8%", boxSizing:" border-box"}} 
                                            variant="contained" color="primary" 
                                            onClick={this.handleRedirect}>Already Have Account</Button>
                                </div>
                        </form>
                    </div>
                    <img className="landingPageImg" src={image} alt="two individuals cooking"/>
                </div>
  
                <div>
                    <h3>About RecipEase</h3>
                    {/* Make display showing what is included in app */}
                </div>
                <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
)(LandingPage)