import React from "react"
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import "../styles.css"


export const LandingPage = (props) =>{
    const handleRedirect = () =>{
        props.history.push('/login')
    }
    return(
        <div>
            <Typography variant="h1" component="h2" gutterBottom>
                RecipEase
            </Typography>
            <div>
                {/* Add picture here */}
                <button onClick={handleRedirect}>Create Acdcount</button>
                <button>Learn more about RecipEase</button>
            </div>
            <div>
                <h3>About RecipEase</h3>
                {/* Make display showing what is included in app */}
            </div>
            <div>
                BOTTOM OF APP, other links
            </div>
        </div>
    )
}

