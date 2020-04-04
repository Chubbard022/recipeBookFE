import React from "react"

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
                <UserAccount />
                <RecipeMaker />
            </div>
            <div className="dashboardLayer">
                <Inspiration />
                <Social />
            </div>
        </div>
    )
}
