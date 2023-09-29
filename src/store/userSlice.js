import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        user: {
            firstName: '',
            lastName: '',
            id:'',
        },
        token: ''
    },
    reducers: {
        token: (state, action) => {
            return {...state, authenticated: true, token: action.payload}
        },
        updateProfile: (state, action) => {
            return {...state, user: action.payload}
        },
        logoutAction: () => {
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
    logoutAction}
    = userSlice.actions;


export default userSlice.reducer;