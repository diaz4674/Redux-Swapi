import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChar = () => dispatch => {
    console.log("made it here")
    dispatch({type: FETCHING})
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log(res.data.results)
            dispatch({type: SUCCESS, payload: res.data.results})
            }
        )
        .catch(err => dispatch({type: FAILURE, payload: err}))
} 