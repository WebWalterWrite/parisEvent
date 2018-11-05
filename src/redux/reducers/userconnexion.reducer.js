import {  USER_DISPATCH } from '../actions/types';

const initialState = {
    user : {},
}
export default (state= initialState, action ) => {
    switch (action.type) {
        case USER_DISPATCH :
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
} ;