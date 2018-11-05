import { USER_DISPATCH } from './types'

export const userlogin = (user) => {
    return {
        type: USER_DISPATCH,
        payload: user 
    }
};