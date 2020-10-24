import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import users, { userSaga } from './users';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  counter,
  users,
});

export const rootSaga = function* () {
  yield all([counterSaga(), userSaga()]);
};

export default rootReducer;
