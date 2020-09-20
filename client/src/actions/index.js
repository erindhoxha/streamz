import streams from "../api/streams"
import { SIGN_IN, SIGN_OUT } from "./types"

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

export const CreateStream = (formValues) => {
    return async (dispatch) => {
        streams.post('/streams', formValues)
    };
}