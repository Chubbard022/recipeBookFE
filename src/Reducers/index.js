import* as login from "../Actions/index"
import * as recipe from "../Actions/recipe"
import * as inspiration from "../Actions/inspiration"
import * as social from "../Actions/social"
import * as favorited from "../Actions/addFavorite"
import * as category from "../Actions/category";

const initialState = {
    fetchingUserRecipes:false,
    inspirationDropDown:false,
    favoritingRecipe:false,
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
    checking:false,
    found:false,
    errorStatusCode: null,
    message: null,
    error: null,
    token: null,
    username: localStorage.getItem("Username"),
    inspirationRecipes: [],
    userListRecipe:[],
    favorited:[],
    userList: [],
    recipes:[],
    categories: []
}

const addToUserAccount = (event) =>{
    console.log(event)
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case login.REGISTER_SUCCESS:
            return{
                ...state,
                error: null,
                registering:false,
            }
        case login.REGISTER_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        case login.LOGIN_SUCCESS:
            return{
                ...state,
                error: null,
                message: action.payload.message,
                username: action.payload.username,
                token: action.payload.token
            }
        case login.LOGIN_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        case login.LOGOUT_SUCCESS:
            return{
                ...state,
                loggingOut: false,
                message: action.payload
            }
        case login.LOGOUT_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        case recipe.GET_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload,
                gettingRecipe: false
            }
        case recipe.GET_RECIPE_SUCCESS:
            return{
                ...state,
                error: null,
                recipes: action.payload
            }
        case recipe.CREATE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case recipe.CREATE_RECIPE_SUCCESS:
            state.recipes.push(action.payload)
            return {
                ...state,
                error: null,
                //recipes: [...state.recipes, action.payload]
            }
        case recipe.EDIT_RECIPE_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case recipe.EDIT_RECIPE_SUCCESS:
            return{
                ...state,
                error: null,
                recipes: action.payload
            }
        case recipe.DELETE_RECIPE_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        case recipe.DELETE_RECIPE_SUCCESS:
            return{
                ...state,
                error: null,
                recipes: action.payload
            }
        case inspiration.GET_INSPIRATION_SUCCESS:
            return{
                ...state,
                error: null,
                inspirationRecipes: action.payload,
            }
        case inspiration.GET_INSPIRATION_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case inspiration.GET_INSPIRATION_DROPDOWN_SUCCESS:
            return{
                ...state,
                error: null,
                inspirationRecipes: action.payload,
            }
        case inspiration.GET_INSPIRATION_DROPDOWN_FAILURE:
            return{
                ...state,
                error:true
            }
        case social.GET_SOCIAL_SUCCESS:
            return{
                ...state,
                error: null,
                userList: action.payload,
            }
        case social.GET_SOCIAL_FAILURE:
            return{
                ...state,
                error:true
            }
        case social.GET_SOCIAL_RECIPE_SUCCESS:
            return{
                ...state,
                error: null,
                userListRecipe: action.payload
            }
        case social.GET_SOCIAL_RECIPE_FAILURE:
            return{
                ...state,
                error: true
            }
        // NEED HELPER FUNCTION BELOW
        case favorited.FAVORITE_SUCCESS:
            //state.favorited.push(action.payload)
            addToUserAccount(action.payload)
            return{
                ...state,
                error: null,
                favoritingRecipe:false,
                favorited: [...state.favorited,action.payload]
            }
        case favorited.FAVORITE_FAILURE:
            return{
                ...state,
                error: true
            }
        // NEED HELPER FUNCTION BELOW
        case favorited.GET_FAVORITE_SUCCESS:
            return{
                ...state,
                error: null,
                favorited: action.payload,
                inspirationRecipes: state.inspirationRecipes.map(recipe=>{
                    if(recipe.id === action.payload){
                        recipe = action.payload;
                    }
                })
            }
        case favorited.GET_FAVORITE_FAILURE:
            return{
                ...state,
                error:true
            }
        case favorited.DELETE_FAVORITE_SUCCESS:
            return{
                ...state,
                error: null,
                favorited:action.payload
            }
        case favorited.DELETE_FAVORITE_FAILURE:
            return{
                ...state,
                error:true
            }
        case favorited.CHECK_RECIPE_SUCCESS:
            return{
                ...state,
                error: null,
                found: action.payload
            }
        case favorited.CHECK_RECIPE_FAILURE:
            return{
                ...state,
                error:true
            }
        case category.GET_CATEGORY_SUCCESS:
            return{
                ...state,
                error: null,
                categories: action.payload
            }
        case category.GET_CATEGORY_FAILURE: 
            return{
                ...state,
                error: action.payload
            }
        case category.CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                error: null,
                categories: action.payload
            }
        default:
            return state;
    }
}
