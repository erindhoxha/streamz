import { SIGN_IN, SIGN_OUT } from "./types"

export const SignIn = (id, name) => {
    console.log("Sign in action started");
    return {
        type: SIGN_IN,
        payload: {
            id: id,
            name: name
        }
    };
};

export const SignOut = () => {
    console.log("Sign out");
    return {
        type: SIGN_OUT,
    };
};