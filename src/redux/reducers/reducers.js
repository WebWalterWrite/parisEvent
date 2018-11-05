import { combineReducers }  from "redux";
import userReducer from './userconnexion.reducer';

export default combineReducers({
    user: userReducer,
});

