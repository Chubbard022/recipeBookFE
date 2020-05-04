import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import SideBar from "./SideBar"
import DashHeader from "./DashHeader"

import "../../styles.css"



export const Dashboard = () =>{
    return(
        <div className="dashboard">
            <DashHeader/>
                <div className="dashboardMain">
                    <SideBar />
                        <div className="dashboardComp">
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
                </div>
        </div>
    )
}
