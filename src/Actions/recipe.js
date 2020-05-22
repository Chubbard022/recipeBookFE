import axios from "axios"



export const 
    GET_RECIPE = "GET_RECIPE",
    GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS",
    GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE",
    CREATE_RECIPE = "CREATE_RECIPE",
    CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS",
    CREATE_RECIPE_FAILURE = "CREATE_RECIPE_FAILURE",
    EDIT_RECIPE = "EDIT_RECIPE",
    EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS",
    EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE",
    DELETE_RECIPE = "DELETE_RECIPE",
    DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS",
    DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE"

    const URL = "http://localhost:6500/api"

export const getRecipes = () => dispatch =>{
    dispatch({type: GET_RECIPE})
    axios
        .get(`${URL}/recipes`)
            .then(res=>{
                dispatch({
                    type: GET_RECIPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type: GET_RECIPE_FAILURE,
                    payload: "ERROR: Failure to get recipes"
                })
            })
}
export const createRecipe = (newRecipe) => dispatch =>{
    dispatch({type:CREATE_RECIPE})
    axios
        .post(`${URL}/recipes`,newRecipe)
            .then(res=>{
                dispatch({
                    type: CREATE_RECIPE_SUCCESS,
                    payload: newRecipe
                })
            })
            .catch(err=>{
                dispatch({
                    type: CREATE_RECIPE_FAILURE,
                    payload: "ERROR: Failure to create new recipe"
                })
            })
}

export const editRecipe = (recipe) => dispatch=>{
    dispatch({type:EDIT_RECIPE})
    axios
    .put(`${URL}/recipes/${recipe.id}`,recipe)
        .then(res=>{
            axios
            .get(`${URL}/recipes`)
                .then(res=>{
                    dispatch({
                        type: EDIT_RECIPE_SUCCESS,
                        payload: res.data
                    })
                })
        })
        .catch(err=>{
            dispatch({
                type: EDIT_RECIPE_FAILURE,
                payload: "ERROR: Failure to edit a recipe"
            })
        })
}
export const deleteRecipe = (deleteRecipe) => dispatch =>{
    dispatch({type: DELETE_RECIPE})
    axios
        .delete(`${URL}/recipes`,deleteRecipe)
            .then(res=>{
                dispatch({
                    type: DELETE_RECIPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type: DELETE_RECIPE_FAILURE,
                    payload: "ERROR: Failure to delete recipe"
                })
            })
}   