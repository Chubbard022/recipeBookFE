import React,{Component} from "react"
import axios from "axios"

import "../../styles.css"

const URL = "http://localhost:6500/api/recipes"

export class RecipeMaker extends Component{

     componentDidMount() {
        axios.get(URL)
            .then(res=>{
                console.log("RES",res)
            })
            .catch(err=>{
                console.log("ERR",err)
            })
    }
    


    render(){
        return(
            <div>
                WORKING
            </div>
        )
    }
}