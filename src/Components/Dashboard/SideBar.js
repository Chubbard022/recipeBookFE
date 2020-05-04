import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function SideBar(props){
    return(
        <div className="sideBar">
            <div className="sideBarLinks">
                <Link to="/account"> 
                    Account
                </Link>
                <Link to="/recipemaker">
                    Create Recipe
                </Link>
                <Link to="/inspiration">
                    Get Inspiration
                </Link>
                <Link to="/social">
                    Find other Users
                </Link>
                <div>
                    LOGOUT
                </div>
            </div>
        </div>
    )
}
export default SideBar