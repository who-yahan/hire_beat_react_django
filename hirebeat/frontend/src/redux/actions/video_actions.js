import axios from "axios";
import { GET_VIDEOS, DELETE_VIDEO, ADD_VIDEO } from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getVideos = () => (dispatch, getState) => {
  axios
    .get("/api/videos/", tokenConfig(getState))
    .then((res) => {
      console.log("get videos");
      console.log(res.data);
      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteVideo = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/videos/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ successMessage: "Video Deleted" }));
      dispatch({
        type: DELETE_VIDEO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addVideo = (video) => (dispatch, getState) => {
  axios
    .post("/api/videos/", video, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ successMessage: "Video Saved" }));
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getUnreviewedVideo = () => (dispatch, getState) => {
  axios
    .get("get_unreviewed_video", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
