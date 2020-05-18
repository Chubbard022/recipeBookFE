import {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
} from "../Actions/index"
import {
    GET_RECIPE,
    GET_RECIPE_SUCCESS,
    GET_RECIPE_FAILURE,
    CREATE_RECIPE,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE,
    EDIT_RECIPE,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    DELETE_RECIPE,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE
} from "../Actions/recipe"

const initialState = {
    registering: false,
    loggedIn: false,
    loggingOut: false,
    gettingRecipe: false,
    addingRecipe:false,
    deletingRecipe: false,
    editingRecipe: false,
    message: null,
    error: null,
    errorStatusCode: null,
    fetchingRecipes: false,
    signingUp: false,
    token: null,
    recipes:[],
    username: ""
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case REGISTER:
            return{
                ...state,
                error: null,
                registering:true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                registering:false,
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                registering: false,
                error:action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: null,
                loggedIn:true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggedIn: false,
                message: action.payload.message,
                username: action.payload.username,
                token: action.payload.token
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loggedIn: false,
                error: action.payload,
            }
        case LOGOUT:
            return{
                ...state,
                error: null,
                loggingOut: true,
            }
        case LOGOUT_FAILURE:
            return{
                ...state,
                error: action.payload,
                loggingOut: false
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                loggingOut: false,
                message: action.payload
            }
        case GET_RECIPE :
            return{
                ...state,
                gettingRecipe: true,
                error: null,
            }
        case GET_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload,
                gettingRecipe: false
            }
        case GET_RECIPE_SUCCESS:
            return{
                ...state,
                gettingRecipe:false,
                recipes: action.payload
            }
        case CREATE_RECIPE:
            return{
                ...state,
                error: null,
                addingRecipe: true
            }
        case CREATE_RECIPE_FAILURE:
            return {
                ...state,
                addingRecipe:false,
                error: action.payload
            }
        case CREATE_RECIPE_SUCCESS:
                state.recipes.push(action.payload)
            return {
                ...state,
                addingRecipe: false,
            }
        case EDIT_RECIPE:
            return{
                ...state,
                editingRecipe: true,
                error: null
            }
        case EDIT_RECIPE_FAILURE:
            return{
                ...state,
                editingRecipe:false,
                error: action.payload
            }
        case EDIT_RECIPE_SUCCESS:
            return{
                ...state,
                editingRecipe:false,
                //need to update list of recipes with edited recipe
            }
        default:
            return state;
    }
}
