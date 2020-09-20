
export default (state = { isSignedIn: null }, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state, isSignedIn: true,
                id: action.payload.id,
                name: action.payload.name
            }
            break;
        case "SIGN_OUT":
            return {
                ...state, isSignedIn: false,
                id: null,
                name: null
            }
            break;
        default:
            return state
    };
};