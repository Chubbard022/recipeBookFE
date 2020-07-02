import axios from "axios"
import Inspiration from "../Components/Dashboard/LinksWithinDash/Inspiration";
require('dotenv').config()

export const 
    GET_INSPIRATION = "GET_INSPIRATION",
    GET_INSPIRATION_SUCCESS = "GET_INSPIRATION_SUCCESS",
    GET_INSPIRATION_FAILURE = "GET_INSPIRATION_FAILURE"


const RECIPE = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.REACT_APP_SPOON_API}`
const URL = "http://localhost:6500/api"



export const getInspiration = () => dispatch =>{
    dispatch({type: GET_INSPIRATION})
    axios
        .get(`${RECIPE}`)
            .then(res=>{
                console.log("_________",res)
                console.log(res.data.recipes[0].image)
                let ingredients = []
                const ingredientList = Object.values(res.data.recipes[0].extendedIngredients)
                const image = res.data.recipes[0].image

                ingredientList.map(item=> ingredients.push(item.original))
                const finalIngredientList = ingredients.join()

                let newRecipe = {
                    instructions: res.data.recipes[0].instructions,
                    name: res.data.recipes[0].title,
                    ingredients: finalIngredientList,
                    image: image
                }
                
                axios
                //Putting recipe into the backend for persistence
                    .post(`${URL}/inspiration/newrecipe`,newRecipe)
                        .then(()=>{
                            axios
                                .get(`${URL}/inspiration`)
                                    .then(res=>{
                                        dispatch({
                                            type: GET_INSPIRATION_SUCCESS,
                                            payload: res.data
                                        })
                                    })
                                    .catch(err=>{
                                        console.log("ERR")
                                    })

                        })
            })
            .catch(err=>{
                dispatch({
                    type: GET_INSPIRATION_FAILURE,
                    payload: "ERROR: Failure to get new recipe"
                })
            })
}