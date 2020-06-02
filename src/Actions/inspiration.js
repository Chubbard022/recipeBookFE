import axios from "axios"
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
                let ingredients = []
                let ingredientList = Object.values(res.data.recipes[0].extendedIngredients)

                ingredientList.map(item=> ingredients.push(item.original))
                let finalIngredientList = ingredients.join()

                let newRecipe = {
                    instructions: res.data.recipes[0].instructions,
                    name: res.data.recipes[0].title,
                    ingredients: finalIngredientList
                }
                
                axios
                    .post(`${URL}/inspiration/newrecipe`,newRecipe)
                        .then(res=>{
                            dispatch({
                                type: GET_INSPIRATION_SUCCESS,
                                payload: newRecipe
                            })
                            console.log("***",res)
                        })
            })
            .catch(err=>{
                dispatch({
                    type: GET_INSPIRATION_FAILURE,
                    payload: "ERROR: Failure to get new recipe"
                })
            })
}