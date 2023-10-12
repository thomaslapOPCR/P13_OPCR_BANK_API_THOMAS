import { createSlice } from "@reduxjs/toolkit";
import {clearLocalStorage, getToLocalStorage, saveToLocalStorage} from "../services/authContext";

const checkAuthLocalStorage = () => {
    const token = getToLocalStorage('auth');
    return !!token;
}


const getDataLocalStorage = () => {
    const userData = getToLocalStorage('profile');
    return userData ? JSON.parse(userData) : '';
}

const user = getDataLocalStorage();
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: checkAuthLocalStorage(),
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            id:user.id,
        },
        token: '',
        rememberMe : false

    },
    reducers: {
        token: (state, action) => {
            saveToLocalStorage('auth',action.payload, state.rememberMe);

            return   {...state, authenticated: true, token: action.payload} ;
        },
        updateProfile: (state, action) => {
            return {...state, user: action.payload}
        },
        updaterRememberMe : (state,action)=>{
            return{...state, rememberMe:action.payload}
        },
        logoutAction: (state) => {
            clearLocalStorage(state.rememberMe);
            return {
                authenticated: false,
                user: {},
                token: ''
            }
        }
    },
});


export const {
    token,
    updateProfile,
    updaterRememberMe,
    logoutAction}
    = userSlice.actions;


export default userSlice.reducer;