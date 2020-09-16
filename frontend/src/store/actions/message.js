import axios from "axios";
import axiosInstance from '../../apiIntercepter';
import * as actionTypes from "./actionTypes";
import { HOST_URL } from "../../settings";

export const addMessage = (message) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    message: message,
  };
};

export const setMessages = (messages) => {
  return {
    type: actionTypes.SET_MESSAGES,
    messages: messages,
  };
};

const getUserChatsSuccess = (chats) => {
  return {
    type: actionTypes.GET_CHATS_SUCCESS,
    chats: chats,
  };
};

export const getUserChats = (username, token) => {
  console.log('-->',username, token);
  return (dispatch) => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem('token')}`,
    };
    axiosInstance
      .get(`${HOST_URL}/api/1.0.0/justchat?email=${username}`)
      .then((res) => {
        console.log('***',res);
        dispatch(getUserChatsSuccess(res.data));
      });
  };
};
