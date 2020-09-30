import axios from "axios"



export const 
    GET_RECIPE_START = "GET_RECIPE_START",
    GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS",
    GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE",
    GET_RECIPE_BYID_START = "GET_RECIPE_BYID_START",
    GET_RECIPE_BYID_SUCCESS = "GET_RECIPE_BYID_SUCCESS",
    GET_RECIPE_BYID_FAILURE = "GET_RECIPE_BYID_FAILURE",
    CREATE_RECIPE_START = "CREATE_RECIPE_START",
    CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS",
    CREATE_RECIPE_FAILURE = "CREATE_RECIPE_FAILURE",
    EDIT_RECIPE_START = "EDIT_RECIPE_START",
    EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS",
    EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE",
    DELETE_RECIPE_START = "DELETE_RECIPE_START",
    DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS",
    DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE"

const URL = "http://localhost:6500/api"

export const getRecipes = () => dispatch =>{
    dispatch({type: GET_RECIPE_START})
    axios
        .get(`${URL}/recipes`)
            .then(res=>{
                dispatch({
                    type: GET_RECIPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: GET_RECIPE_FAILURE,
                    payload: error
                })
            })
}
export const createRecipe = (recipe) => dispatch =>{
    dispatch({type:CREATE_RECIPE_START})
    axios
        .post(`${URL}/recipes`,recipe)
            .then(resp=>{
                dispatch({
                    type: CREATE_RECIPE_SUCCESS,
                    payload: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: CREATE_RECIPE_FAILURE,
                    payload: error
                })
            })
}

export const editRecipe = (recipeID,updatedRecipe) => dispatch=>{
    dispatch({type:EDIT_RECIPE_START})
    axios
    .put(`${URL}/recipes/${recipeID}`,updatedRecipe)
        .then(resp=>{
            axios
            .get(`${URL}/recipes`)
                .then(res=>{
                    dispatch({
                        type: EDIT_RECIPE_SUCCESS,
                        payload: res.data
                    })
                })
        })
        .catch(error=>{
            dispatch({
                type: EDIT_RECIPE_FAILURE,
                payload: error.data
            })
        })
}
export const deleteRecipe = (recipeID) => dispatch =>{
    dispatch({type: DELETE_RECIPE_START})
    axios
        .delete(`${URL}/recipes/${recipeID}`)
            .then(resp=>{
                axios
                .get(`${URL}/recipes`)
                    .then(res=>{
                        dispatch({
                            type: DELETE_RECIPE_SUCCESS,
                            payload: res.data
                        })
                    })
            })
            .catch(error=>{
                dispatch({
                    type: DELETE_RECIPE_FAILURE,
                    payload: error.data
                })
            })
}   
