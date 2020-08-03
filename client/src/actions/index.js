export const SignIn = () => {
    console.log("Sign in action started");
    return {
        type: 'SIGN_IN',
    };
};

export const SignOut = () => {
    console.log("Sign out");
    return {
        type: 'SIGN_OUT',
    };
};