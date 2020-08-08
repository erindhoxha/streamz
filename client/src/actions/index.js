import { SIGN_IN, SIGN_OUT } from "./types"

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