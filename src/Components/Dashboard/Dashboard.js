import React from "react"
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';


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
                        <Link className="DashboardBlock" to="/account">Account</Link>
                        <Link className="DashboardBlock" to="/recipemaker">Create Recipe</Link>
                    </div>
                    <div className="dashboardLayer">
                        <Link className="DashboardBlock" to="/inspiration">Get Inspiration</Link>
                        <Link className="DashboardBlock" to="/social">Social</Link>
                    </div>
            </div>
    )
}
