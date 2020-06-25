import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

const headers = {
    Accept: "application/json"
};

export const getInfo = () => dispatch => {
    dispatch({type: FETCHING_START});
    axios.get("https://api.sunrise-sunset.org/json", {headers})
    .then( response => {
        console.log(response);
        dispatch({type: FETCHING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: FETCHING_FAILURE, payload: error.response})
    });
};