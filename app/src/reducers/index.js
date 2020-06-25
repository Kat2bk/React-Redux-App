import {FETCHING_START, FETCHING_SUCCESS} from "../actions/";

const initialState = {
    loading: false,
    info: null,
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                info: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}