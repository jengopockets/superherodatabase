import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILURE = "LOADING_FAILURE";

export const loadingHero = (url) => dispatch => {
    dispatch ({type: LOADING_START})
    console.log(url);
    axios.get(`https://www.superheroapi.com/api.php/3336280869721363/search/${url}`)
    .then(response => {
        console.log(response.data.results);
        dispatch({type: LOADING_SUCCESS, payload:response.data.results})
    })
    .catch(err => {
        dispatch({type: LOADING_FAILURE})
    });
};