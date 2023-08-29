/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import {loginStart, loginFailure, loginSuccess} from './userSlice'
import axios from 'axios'

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/login", user);
      console.log(res.data,typeof res.data)
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };