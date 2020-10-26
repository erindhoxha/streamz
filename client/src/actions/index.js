import streams from "../api/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

// ERIND!!!
console.log(streams.get("/streams").then((response) => console.log(response)));

export const SignIn = (id, name) => {
  return {
    type: SIGN_IN,
    payload: {
      id: id,
      name: name,
    },
  };
};

export const SignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Actions about CreateStream

export const CreateStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const FetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const FetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const DeleteStream = (id) => async (dispatch) => {
  const response = await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const EditStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};
