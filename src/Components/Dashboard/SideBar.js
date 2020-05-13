import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function SideBar(props){
    return(
        <div className="sideBar">
            <div className="sideBarLinks">
                <Link className="sideBarLink" to="/account"> 
                    Account
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
                <div className="sideBarLink" >
                    LOGOUT
                </div>
            </div>
        </div>
    )
}
export default SideBar