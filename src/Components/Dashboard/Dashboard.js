import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


//imports
import {Inspiration} from "./Inspiration.js"
import {RecipeMaker} from "./RecipeMaker.js"
import {Social} from "./Social.js"
import {UserAccount} from "./UserAccount.js"
import "../../styles.css"



export const Dashboard = () =>{
    return(
            <div className="dashboardMain">
                    <div className="dashboardLayer">
                        <Link className="DashboardBlock" to="/account"> 
                            <Typography variant="h3" component="h2" gutterBottom>
                                Account
                            </Typography>
                        </Link>
                        <Link className="DashboardBlock" to="/recipemaker">
                            <Typography variant="h3" component="h2" gutterBottom>
                                Create Recipe
                            </Typography>
                        </Link>
                    </div>
                    <div className="dashboardLayer">
                        <Link className="DashboardBlock" to="/inspiration">
                            <Typography variant="h3" component="h2" gutterBottom>
                                Get Inspiration
                            </Typography>
                        </Link>
                        <Link className="DashboardBlock" to="/social">
                            <Typography variant="h3" component="h2" gutterBottom>
                                Find other Users
                            </Typography>
                        </Link>
                    </div>
            </div>
    )
}
