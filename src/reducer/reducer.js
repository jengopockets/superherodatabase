import { LOADING_START, LOADING_SUCCESS, LOADING_FAILURE } from "../actions/index"

export const initialState = {
    isLoading: false,
    error: "Maybe typed wrong, try another name",
    results: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING_START:
            return {
                ...state,
                isLoading: true,
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                results: action.payload
            }
        case LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "Unable to Access"
            }
        default:
            return state;
    }
}