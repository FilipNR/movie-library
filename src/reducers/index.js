import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const allReducers = combineReducers({
    movieData: movieReducer
});

export default allReducers;