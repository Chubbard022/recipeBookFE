import React from "react"
import "../../styles.css"

function DashHeader(props){
    return(
        <div className="dashboardHeader">
            <div className="dashboardContentLeft">
                RecipEase
            </div>

            <div className="dashboardHeaderRight">
                <div style={{padding: "6px", fontSize: "25px"}}>
                    Search
                </div>
                <div style={{padding: "6px", fontSize: "25px"}}>
                    Account
                </div>
            </div>

        </div>
    )
}
export default DashHeader;