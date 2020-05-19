import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {logout} from "../../Actions/index"
import {connect} from "react-redux"




function SideBar(props){
    const handleLogout = () =>{
        props.logout()
        props.location.push("/")
    }
    return(
        <div className="sideBar">
            <div className="sideBarLinks">
                <Link className="sideBarLink" to="/account"> 
                    My Recipes
                </Link>
                <Link className="sideBarLink" to="/recipemaker">
                    Create Recipe
                </Link>
                <Link className="sideBarLink" to="/inspiration">
                    Get Inspiration
                </Link>
                <Link className="sideBarLink" to="/social">
                    Find other Users
                </Link>
                <div className="sideBarLink" onClick={handleLogout}>
                    LOGOUT
                </div>
            </div>
        </div>
    )
}



export default connect(
    null,
    {logout}
)(SideBar)