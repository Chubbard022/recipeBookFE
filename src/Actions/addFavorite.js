import axios from "axios"

export const 
    START_FAVORITE = "START_FAVORITE",
    FAVORITE_SUCCESS = "FAVORITE_SUCCESS",
    FAVORITE_FAILURE = "FAVORITE_FAILURE",
    GET_FAVORITE = "GET_FAVORITE",
    GET_FAVORITE_SUCCESS = "GET_FAVORITE_SUCCESS",
    GET_FAVORITE_FAILURE = "GET_FAVORITE_FAILURE",
    UPDATE_FAVORITE = "UPDATE_FAVORITE",
    UPDATE_FAVORITE_SUCCESS = "UPDATE_FAVORITE_SUCCESS",
    UPDATE_FAVORITE_FAILURE = "UPDATE_FAVORITE_FAILURE",
    DELETE_FAVORITE = "DELETE_FAVORITE",
    DELETE_FAVORITE_SUCCESS = "DELETE_FAVORITE_SUCCESS",
    DELETE_FAVORITE_FAILURE = "DELETE_FAVORITE_FAILURE",
    CHECK_RECIPE = "CHECK_RECIPE",
    CHECK_RECIPE_SUCCESS = "CHECK_RECIPE_SUCCESS",
    CHECK_RECIPE_FAILURE = "CHECK_RECIPE_FAILURE"


const URL = "http://localhost:6500/api"


 async function checkRecipe (recipe){
    let checkRecipe = false;

        try{
            let response = await axios.get(`${URL}/favorited`)
            for(let i=0; i < response.data.length;i++){
                if(response.data[i].name === recipe.name){
                    checkRecipe =  true
                }
            }
        }catch(err){
            console.log("ERR",err)
        }
        return checkRecipe
}



export const favoriteRecipe = (recipe) => (dispatch) => {
    dispatch({type: START_FAVORITE})
    axios
    .post(`${URL}/favorited`,recipe)
    .then(resp=>{
        axios
            .put(`${URL}/inspiration/${recipe.id}`)
                .then(res=>{
                    dispatch({
                        type: FAVORITE_SUCCESS,
                        payload: recipe
                    })
                })
                .catch(err=>{
                    dispatch({type: FAVORITE_FAILURE,
                        payload: "ERR: Failure to favorite recipe"
                    })
                })
    })
    .catch(err=>{
        dispatch({type: FAVORITE_FAILURE,
            payload: "ERR: Failure to favorite recipe"
        })
    })
}

export const getFavorite = () => dispatch =>{
    dispatch({type:GET_FAVORITE})
    axios
    .get(`${URL}/favorited`)
    .then(resp=>{
        console.log("FAVORITE RESP**__",resp)
        dispatch({
            type: GET_FAVORITE_SUCCESS,
            payload: resp.data
        })
    })
    .catch(err=>{
        dispatch({
            type: GET_FAVORITE_FAILURE,
            payload: "ERR: Failure to get favorite recipes"
        })
    })
}

export const removeFavorite = (recipe) => dispatch =>{
        dispatch({type: DELETE_FAVORITE})
        axios
        .delete(`${URL}/recipes/${recipe.id}`,recipe)
            .then(resp=>{
                dispatch({
                        type: DELETE_FAVORITE_SUCCESS,
                        payload: resp.data
                    })
            })
            .catch(err=>{
                dispatch({
                        type: DELETE_FAVORITE_FAILURE,
                        payload: "ERR: Failure to delete recipe"
                    })
            })
}

