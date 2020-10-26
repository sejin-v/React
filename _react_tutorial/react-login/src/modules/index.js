import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
});

export const rootSaga = function* () {
  yield all([authSaga()]);
};

export default rootReducer;
