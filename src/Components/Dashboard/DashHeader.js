import React,{useState} from "react"
import "../../styles.css"

function DashHeader(props){
    const [searchFunction,setSearchFunction] = useState(false)
    return(
        <div className="dashboardHeader">
            <div className="dashboardContentLeft">
                RecipEase
            </div>

            <div className="dashboardHeaderRight">
                <div onDoubleClick={()=>setSearchFunction(!searchFunction)}style={{padding: "6px", fontSize: "25px"}}>
                    {searchFunction ? <input className="searchBar" placeholder="search" />: "Search"}
                </div>
                <div style={{padding: "6px", paddingLeft: "30px", fontSize: "25px"}} onClick={props.redirect}>
                    My Recipes
                </div>
            </div>

        </div>
    )
}
export default DashHeader;