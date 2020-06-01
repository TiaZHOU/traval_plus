import axios from "axios";
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  GET_LIKES
} from "./types";
import { tokenConfig } from "./authActions";

export const getPosts = search => dispatch => {
  if (search === "") {
    axios
      .get("/api/forum/posts")
      .then(res => {
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
        //dispatch(returnErrors(err.response.data, err.response.status));
      });
  } else {
    axios
      .get(`/api/forum/posts/search/${search}`)
      .then(res => {
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
        //dispatch(returnErrors(err.response.data, err.response.status));
      });
  }
};

// export const getPostsByTopic = topic => dispatch => {
//   console.log(topic);
//   axios
//     .get(`/api/posts/search/${topic}`)
//     .then(res => {
//       dispatch({
//         type: GET_POSTS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(`Error in postActions ${err}`);
//       //dispatch(returnErrors(err.response.data, err.response.status));
//     });
// };

export const getPost = postId => dispatch => {
  axios
    .get(`/api/forum/posts/${postId}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(`Error in postActions ${err}`);
      //dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const createPost = (title, content, topic) => (dispatch, getState) => {
  const data = { title: title, content: content, topic: topic };
  const body = JSON.stringify(data);
  axios
    .post("/api/forum/posts", body, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      //dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deletePost = postId => (dispatch, getState) => {
  axios
    .delete(`/api/forum/posts/${postId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_POST
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editPost = (postId, title, content, topic) => (
  dispatch,
  getState
) => {
  const data = { title: title, content: content, topic: topic };
  const body = JSON.stringify(data);
  axios
    .patch(`/api/forum/posts/${postId}`, body, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: EDIT_POST,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const likePost = postId => (dispatch, getState) => {
  axios
    .post(`/api/forum/posts/likes/${postId}`, null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LIKES,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response));
};
