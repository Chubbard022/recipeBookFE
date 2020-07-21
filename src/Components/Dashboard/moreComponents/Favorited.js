import React, {useState} from "react"
import star from "../../../images/star.png"
import favorite from "../../../images/favorite.png"
import "../LinksWithinDash/linksWithinDash.css"


const clickedStar = () =>{
    console.log("working")
}

const Favorited = (props) =>{
    const [clicked,setClicked] = useState(false)
    return(
        <div>
            Favorited Recipes
            <img className="favoriteRecipe" onClick={clickedStar} src={star} alt="bordered star"/>
        </div>
    )
}

export default Favorited