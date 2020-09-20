
export default (state = { streams: { id: null, title: null, description: null } }, action) => {
    switch (action.type) {
        case "CREATE_STREAM":
            console.log(state);
            return {
                ...state,
                streams: {
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description
                }
            }
            break;
        default:
            return state
    };
};