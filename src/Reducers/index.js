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
import {
    GET_INSPIRATION,
    GET_INSPIRATION_SUCCESS,
    GET_INSPIRATION_FAILURE,
    GET_INSPIRATION_DROPDOWN,
    GET_INSPIRATION_DROPDOWN_SUCCESS,
    GET_INSPIRATION_DROPDOWN_FAILURE
} from "../Actions/inspiration"
import {
    GET_SOCIAL,
    GET_SOCIAL_SUCCESS,
    GET_SOCIAL_FAILURE,
    GET_SOCIAL_RECIPE,
    GET_SOCIAL_RECIPE_SUCCESS,
    GET_SOCIAL_RECIPE_FAILURE
} from "../Actions/social"

const initialState = {
    fetchingUserRecipes:false,
    inspirationDropDown:false,
    fetchingRecipes: false,
    deletingRecipe: false,
    editingRecipe: false,
    gettingRecipe: false,
    fetchingUsers: false,
    addingRecipe: false,
    registering: false,
    loggingOut: false,
    signingUp: false,
    loggedIn: false,
    errorStatusCode: null,
    message: null,
    error: null,
    token: null,
    username: "",
    inspirationRecipes: [],
    userListRecipe:[],
    userList: [],
    recipes:[],
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
                recipes: action.payload
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
                recipes: action.payload
            }
        case DELETE_RECIPE:
            return{
                ...state,
                error:null,
                deletingRecipe: true
            }
        case DELETE_RECIPE_SUCCESS:
            return{
                ...state,
                deletingRecipe:false,
                recipes: action.payload
            }
        case DELETE_RECIPE_FAILURE:
            return{
                ...state,
                deletingRecipe:false,
                error:action.payload
            }
        case GET_INSPIRATION:
            return{
                ...state,
                error: null,
                gettingRecipe: true
            }
        case GET_INSPIRATION_SUCCESS:
            return{
                ...state,
                inspirationRecipes: action.payload,
                gettingRecipe: false
            }
        case GET_INSPIRATION_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case GET_INSPIRATION_DROPDOWN:
            return{
                ...state,
                error: null,
                inspirationDropDown: true
            }
        case GET_INSPIRATION_DROPDOWN_SUCCESS:
            return{
                ...state,
                inspirationRecipes: action.payload,
                inspirationDropDown: false
            }
        case GET_INSPIRATION_DROPDOWN_FAILURE:
            return{
                ...state,
                error:true
            }
        case GET_SOCIAL:
            return{
                ...state,
                error:null,
                fetchingUsers:true
            }
        case GET_SOCIAL_SUCCESS:
            return{
                ...state,
                userList: action.payload,
                fetchingUsers:false
            }
        case GET_SOCIAL_FAILURE:
            return{
                ...state,
                error:true
            }
        case GET_SOCIAL_RECIPE:
            return{
                ...state,
                error:null,
                fetchingUserRecipes: true
            }
        case GET_SOCIAL_RECIPE_SUCCESS:
            return{
                ...state,
                fetchingUserRecipes:false,
                userListRecipe: action.payload
            }
        case GET_SOCIAL_RECIPE_FAILURE:
            return{
                ...state,
                error: true
            }
        default:
            return state;
    }
}
