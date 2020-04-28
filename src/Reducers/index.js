import {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS
} from "../Actions/index"

const initialState = {
    registering: false,
    loggedIn: false,
    loggingOut: false,
    addingRecipe:false,
    deletingRecipe: false,
    editingRecipe: false,
    message: null,
    error: null,
    errorStatusCode: null,
    fetchingRecipes: false,
    signingUp: false,
    token:localStorage.getItem('jwt'),
    recipes:[]
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
                message: action.payload
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
                message: action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loggedIn: false,
                error: action.payload,
                //errorStatusCode: action.payload.status
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
                message: action.payloads
            }

        default:
            return state;
    }
}
