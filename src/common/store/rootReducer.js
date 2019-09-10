import { combineReducers } from 'redux';
import { tempReducer } from '../../app/temp/Temp.reducer'

export const rootReducer = combineReducers({
  temp: tempReducer
});