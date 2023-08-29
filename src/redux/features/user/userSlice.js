/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isAuthenticated: false,
    error: false,
  },
  reducers: {
        loginStart:(state)=> {
            state.isFetching=true
        },

        loginSuccess:(state,action)=>{
            state.isFetching=false
            console.log(action.payload)
            state.currentUser=action.payload
            state.isAuthenticated=true
        },
        loginFailure:(state)=>{
            state.isFetching=false
            state.error=true
        },
        logOut:(state)=>{
          state.currentUser=null
        }
    },
  },
);

export const { loginStart, loginSuccess, loginFailure,logOut } = userSlice.actions;
export default userSlice.reducer;
