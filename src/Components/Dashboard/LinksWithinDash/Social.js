import React, {Component} from "react"
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"
import "./linksWithinDash.css"

import {getOtherUsers} from "../../../Actions/social"

class Social extends Component{

    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.state={
            userList: []
        }
    }

    componentDidMount(){
        this.props.getOtherUsers()
        this.setState({
            ...this.state,
            userList: this.props.userList
        })

    }
    handleRedirectUserPage = (username) =>{
        console.log(username)
    }
  

    render(){
        return(
            <div>
                <Button 
                    onClick={()=>this.props.history.push("/dashboard")}
                    variant="contained" 
                    color="primary" 
                >Back To Dashboard</Button>
               <div>
                   {this.state.userList.map((user,index)=>{
                       let userName= user.username;
                       return(
                           <div className="user" key={index} onClick={ (userName) => this.handleRedirectUserPage(userName) }>
                                <p>{userName}</p>
                           </div>
                       )
                   })}
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    userList: state.userList,
    // userListRecipe: userListRecipe
})

export default connect(
    mapStateToProps,
    {getOtherUsers}
)(Social)