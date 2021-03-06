import React, {Component} from "react"
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"
import Individual from "./Individual"
import "../../../styles/css/styles.css"

import {getOtherUsers,getUserRecipes} from "../../../Actions/social"

class Social extends Component{

    constructor(props){
        super(props)
        this.state={
            clickedUser : false,
        }
    }

    componentDidMount(){
        this.props.getOtherUsers()
    }
    handleRedirectUserPage = (e) =>{
        let selectedUser = e.currentTarget.textContent
        this.props.getUserRecipes(selectedUser)
        this.setState({
            ...this.state,
            clickedUser: true
        })
    }
    handleRedirectSocialPage = () => {
        this.setState({...this.state,clickedUser:false})
    }

    render(){
        return(
            <div>
                <diiv className={ this.state.clickedUser ? "vanish":null}>
                    <Button 
                        onClick={()=>this.props.history.push("/dashboard")}
                        variant="contained" 
                        color="primary" 
                    >Back To Dashboard</Button>
                </diiv>
                <div className={ this.state.clickedUser ? "vanish" : null}>
                    {this.props.userList.map((user,index)=>{
                        return(
                            <div className="SocialUser" key={index} onClick={ this.handleRedirectUserPage }>
                                    <p className="userUsername">{user.username}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={ this.state.clickedUser ? null: "vanish"}>
                    <Individual 
                        userListRecipe={this.props.userListRecipe}
                        handleRedirectSocialPage={this.handleRedirectSocialPage}
                        />
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