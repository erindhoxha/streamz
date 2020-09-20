import streams from "../api/streams"
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types"

// ERIND!!!
console.log(streams.get("/streams").then(response => console.log(response)));

export const SignIn = (id, name) => {
    return {
        type: SIGN_IN,
        payload: {
            id: id,
            name: name
        }
    };
};

export const SignOut = () => {
    return {
        type: SIGN_OUT,
    };
};

// Actions about CreateStream

export const CreateStream = (formValues) => async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({ type: CREATE_STREAM, payload: response.data })
}