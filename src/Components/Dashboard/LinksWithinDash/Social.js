import React, {Component} from "react"
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"
import Individual from "./Individual"
import "./linksWithinDash.css"
import "../../../styles/css/styles.css"

import {getOtherUsers,getUserRecipes} from "../../../Actions/social"

class Social extends Component{

    constructor(props){
        super(props)
        this.state={
            userList: [],
            clickedUser : false,
        }
    }

    componentDidMount(){
        this.props.getOtherUsers()
        this.setState({
            ...this.state,
            userList: this.props.userList
        })
    }
    handleRedirectUserPage = (e) =>{
        let selectedUser = e.currentTarget.textContent
        this.props.getUserRecipes(selectedUser)
        this.setState({
            ...this.state,
            clickedUser: true
        })
    }
  

    render(){
        return(
            <div>
                <Button 
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>
                <div className={ this.state.clickedUser ? "vanish" : null}>
                    {this.props.userList.map((user,index)=>{
                        let userName= user.username;
                        return(
                            <div className="SocialUser" key={index} onClick={ this.handleRedirectUserPage }>
                                    <p className="userUsername">{userName}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={ this.state.clickedUser ? null: "vanish"}>
                    <Individual userListRecipe={this.props.userListRecipe}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    userList: state.userList,
    userListRecipe: state.userListRecipe
})

export default connect(
    mapStateToProps,
    {getOtherUsers,getUserRecipes}
)(Social)