import auth from "./auth"
import { dispatch } from "rxjs/internal/observable/pairs";


export const
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    REGISTER_FAILURE = "REGISTER_FAILURE",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    LOGOUT = "LOGOUT"

    const URL = ""

    export const register = creds => dispatch =>{
        auth()
        .post("URL")
            .then(res=>{
                dispatch({
                    type: REGISTER,
                    payload: res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type: REGISTER_FAILURE,
                    payload: "ERROR: Failure to successfully register"
                })
            })
    }

    export const login = creds => dispatch =>{
        auth()
            .post(`${URL}/login`,creds)
                .then(res=>{
                    dispatch({
                        type: LOGIN,
                        payload: res.data 
                    })
                })
                .catch(err=>{
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: "ERROR: Failure to successfully login"
                    })
                })
    }

    export const logout = () => dispatch =>{
        localStorage.clear()
        // make sure logging in correctly
        .then(res=>{
            dispatch({
                type: LOGOUT,
                payload: "Successfully logged out"
            })
        })
    }
