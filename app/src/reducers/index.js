import {FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE} from "../actions";

const initialState = {
    info: [],
    isFetching: false,
    error: "",
    fetched: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                info: action.payload,
                isFetching: false,
                fetched: true
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}