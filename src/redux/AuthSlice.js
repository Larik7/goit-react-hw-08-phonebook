import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registerFetch } from "./ContactsOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    errorRegister: null,
    errorLogin: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            // case for logout
            .addCase(logOut.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            // cases for refreshing
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            // case for error register
            .addCase(registerFetch.rejected, (state, action) => {
                state.errorRegister = action.payload;
            })
            // case for error login
            .addCase(logIn.rejected, (state, action) => {
                state.errorLogin = action.payload;
            })
            // mather for register & login
            .addMatcher(
                isAnyOf(registerFetch.fulfilled, logIn.fulfilled),
                (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
                    state.error = null;
                })
    
});

export const authReducer = authSlice.reducer;