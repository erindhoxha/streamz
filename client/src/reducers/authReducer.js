import { SIGN_IN, SIGN_OUT } from "../actions/types"

export default (state = { isSignedIn: null }, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('Reducer sign in is started');
            return { ...state, isSignedIn: true, id: action.payload.id, name: action.payload.name }
            break;
        case SIGN_OUT:
            console.log('Reducer sign out is started');
            return { ...state, isSignedIn: false }
            break;
        default:
            return state
    };
};