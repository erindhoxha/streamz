const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('Reducer sign in is started');
            return { ...state, isSignedIn: true }
            break;
        case 'SIGN_OUT':
            console.log('Reducer sign out is started');
            return { ...state, isSignedIn: false }
            break;
        default:
            return state
    };
};