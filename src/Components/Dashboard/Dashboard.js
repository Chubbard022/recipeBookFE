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
                                <div className="DashboardBlock">
                                    <Link className="link" to="/account"> 
                                        <Typography className="CardTitle"  variant="h4" component="h2" gutterBottom>
                                            Account
                                        </Typography>
                                    </Link>
                                </div>
                                <div className="DashboardBlock">
                                    <Link className="link" to="/recipemaker">
                                        <Typography className="CardTitle"  variant="h4" component="h2" gutterBottom>
                                            Create Recipe
                                        </Typography>
                                    </Link>
                                </div>
                            </div>
                            <div className="dashboardLayer">
                                <div className="DashboardBlock">
                                    <Link className="link" to="/inspiration">
                                        <Typography className="CardTitle" variant="h4" component="h2" gutterBottom>
                                            Get Inspiration
                                        </Typography>
                                        <p>Find new recipes that help bring inspiration to cooking </p>
                                    </Link>
                                </div>
                                <div className="DashboardBlock">
                                    <Link className="link" to="/social">
                                        <Typography className="CardTitle" variant="h4" component="h2" gutterBottom>
                                            Find other Users
                                        </Typography>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}
