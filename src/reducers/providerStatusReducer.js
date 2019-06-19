import {GET_REMOTE_ABOUT, REQUEST_ERROR, REQUEST_SUCCESS} from "../actions/types";

const initialState = {
    about: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_REMOTE_ABOUT:
            if (action.status === REQUEST_SUCCESS) {
                return {...state, about: {...state.about, [action.id]: action.payload}};
            } else if (action.status === REQUEST_ERROR) {
                console.log("Error occurred");
            }
            break;

        default:
            return state;

    }
}