import {combineReducers} from 'redux';
import {AuthSlice} from './features/authSlice';

export default combineReducers({
  authReducer: AuthSlice.reducer,
});
