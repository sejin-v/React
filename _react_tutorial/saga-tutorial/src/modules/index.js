import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import users, { userSaga } from './users';
import login, { loginSaga } from './login';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  counter,
  users,
  login,
});

export const rootSaga = function* () {
  yield all([counterSaga(), userSaga(), loginSaga()]);
};

export default rootReducer;
