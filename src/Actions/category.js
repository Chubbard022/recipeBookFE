import axios from "axios";


export const
    GET_CATEGORY_START = "GET_CATEGORY_START",
    GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS",
    GET_CATEGORY_FAILURE = "GET_CATEGORY_FAILURE",
    CREATE_CATEGORY_START = "CREATE_CATEGORY_START",
    CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS",
    CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE",
    EDIT_CATEGORY_START = "EDIT_CATEGORY_START",
    EDIT_CATEGORY_SUCCESS = "EDIT_CATEGORY_SUCCESS",
    EDIT_CATEGORY_FAILURE = "EDIT_CATEGORY_FAILURE",
    DELETE_CATEGORY_START = "DELETE_CATEGORY_START",
    DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS",
    DELETE_CATEGORY_FAILURE =  "DELETE_CATEGORY_FAILURE"
    FIND_CATEGORY_BYID_START = "FIND_CATEGORY_BYID_START",
    FIND_CATEGORY_BYID_SUCCESS = "FIND_CATEGORY_BYID_SUCCESS",
    FIND_CATEGORY_BYID_FAILURE = "FIND_CATEGORY_BYID_FAILURE",
    FIND_CATEGORY_BYNAME_START = "FIND_CATEGORY_BYNAME_START",
    FIND_CATEGORY_BYNAME_SUCCESS = "FIND_CATEGORY_BYNAME_SUCCESS",
    FIND_CATEGORY_BYNAME_FAILURE = "FIND_CATEGORY_BYNAME_FAILURE",
    FIND_RECIPE_IN_CATEGORY_START = "FIND_RECIPE_IN_CATEGORY_START",
    FIND_RECIPE_IN_CATEGORY_SUCCESS = "FIND_RECIPE_IN_CATEGORY_SUCCESS",
    FIND_RECIPE_IN_CATEGORY_FAILURE = "FIND_RECIPE_IN_CATEGORY_FAILURE"

const URL = "http://localhost:6500/api";

export const getCategory = () => dispatch =>{
    dispatch({type: GET_CATEGORY_START})
    axios
        .get(`${URL}/category`)
            .then(resp=>{
                dispatch({
                    type: GET_CATEGORY_SUCCESS,
                    paylaod: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: GET_CATEGORY_FAILURE,
                    paylaod: error
                })
            })
}

export const createCategory = (newCategory) => dispatch =>{
    dispatch({type: CREATE_CATEGORY_START})
    axios
        .post(`${URL}/category`,newCategory)
            .then(resp=>{
                dispatch({
                    type: CREATE_CATEGORY_SUCCESS,
                    payload: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: CREATE_CATEGORY_FAILURE,
                    paylaod: error
                })
            })
}

export const editCategory = (categoryName, updatedCategroy) => dispatch =>{
    dispatch({type: EDIT_CATEGORY_START})
    axios
        .put(`${URL}/category/:name`,categoryName,updatedCategroy)
            .then(resp=>{
                dispatch({
                    type: EDIT_CATEGORY_SUCCESS,
                    payload:resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type:EDIT_CATEGORY_FAILURE,
                    payload: error
                })
            })
}

export const findCategoryByID = (categoryID) => dispatch =>{
    dispatch({type:FIND_CATEGORY_BYID_START})
    axios
        .get(`${URL}/category/:id`,categoryID)
            .then(resp=>{
                dispatch({
                    type: FIND_CATEGORY_BYID_SUCCESS,
                    payload: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: FIND_CATEGORY_BYID_FAILURE,
                    payload:error
                })
            })
}
export const findCategoryByName = (categoryName) => dispatch =>{
    dispatch({type:FIND_CATEGORY_BYNAME_START})
    axios
        .get(`${URL}/category/:name`,categoryName)
            .then(resp=>{
                dispatch({
                    type: FIND_CATEGORY_BYNAME_SUCCESS,
                    payload:resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: FIND_CATEGORY_BYNAME_FAILURE,
                    payload: error
                })
            })
}
export const findRecipesWithinCategory = (categoryName) => dispatch =>{
    dispatch({type: FIND_RECIPE_IN_CATEGORY_START})
    axios
        .get(`${URL}/category/recipes/:name`,categoryName)
            .then(resp=>{
                dispatch({
                    type: FIND_RECIPE_IN_CATEGORY_SUCCESS,
                    paylaod: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: FIND_RECIPE_IN_CATEGORY_FAILURE,
                    paylaod: error
                })
            })
}
export const deleteCategory = (categoryID) => {
    dispatch({DELETE_CATEGORY_START})
    axios
        .delete(`${URL}/:id`,categoryID)
            .then(resp=>{
                dispatch({
                    type: DELETE_CATEGORY_SUCCESS,
                    payload: resp.data
                })
            })
            .catch(error=>{
                dispatch({
                    type: DELETE_CATEGORY_FAILURE,
                    payload: error
                })
            })
}