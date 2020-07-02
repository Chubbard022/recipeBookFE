import axios from "axios"

export const 
    GET_SOCIAL = "GET_SOCIAL",
    GET_SOCIAL_SUCCESS = "GET_SOCIAL_SUCCESS",
    GET_SOCIAL_FAILURE = "GET_SOCIAL_FAILURE",
    GET_SOCIAL_RECIPE = "GET_SOCIAL_RECIPE",
    GET_SOCIAL_RECIPE_SUCCESS ="GET_SOCIAL_RECIPE_SUCCESS",
    GET_SOCIAL_RECIPE_FAILURE ="GET_SOCIAL_RECIPE_FAILURE"

const URL = "http://localhost:6500/api"

export const getOtherUsers = () => dispatch =>{
    dispatch({type: GET_SOCIAL})
    axios
        .get(`${URL}/social`)
            .then(resp=>{
                dispatch({
                    type:GET_SOCIAL_SUCCESS,
                    payload: resp.data
                })
            })
            .catch(err=>{
                dispatch({type:GET_SOCIAL_FAILURE})
                console.log("ERR")
            })
}

export const getUserRecipes = (username) => dispatch =>{
    dispatch({type:GET_SOCIAL_RECIPE})
    axios
    .get(`${URL}/social/${username}`)
        .then(resp=>{
            let data = resp.data.map(recipe=>{
                return [recipe.id,recipe.name,recipe.ingredients,recipe.instructions, recipe.username]
            })
            dispatch({
                type: GET_SOCIAL_RECIPE_SUCCESS,
                payload: data
            })
        })
    .catch(err=>{
        dispatch({
            type: GET_SOCIAL_RECIPE_FAILURE
        })
        console.log("ERR")
    })
}