import axios from "axios"

export const
    REGISTER = "REGISTER",
    REGISTER_FAILURE = "REGISTER_FAILURE",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    LOGIN = "LOGIN",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGOUT = "LOGOUT",
    LOGOUT_FAILURE = "LOGOUT_FAILURE",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

const URL = "http://localhost:6500/api"

export const register = creds => dispatch =>{
    dispatch({type: REGISTER})
    axios
    .post(`${URL}/register`,creds)
        .then(res=>{
            dispatch({
                type: REGISTER_SUCCESS,
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
    dispatch({type: LOGIN})
    axios
    .post(`${URL}/login`,creds)
    .then(res=>{
        localStorage.setItem("jwt", res.data.token)
            dispatch({
                type: LOGIN_SUCCESS,
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
    return dispatch({type:LOGOUT})
}
