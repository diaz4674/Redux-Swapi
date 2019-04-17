import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FETCHING: 
    return {
      ...state,
      isLoading: true,
      error: null
    }
    case SUCCESS:              
    return {
      ...state,
      characters: action.payload,
      isLoading: false,
      
    }
    case FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
    default:
      return state;
  }
  
};
