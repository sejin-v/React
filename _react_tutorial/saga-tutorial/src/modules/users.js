import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const GET_USERS = 'users/GET_USERS';
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

export const getUsers = () => ({
  type: GET_USERS,
});

const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

function* getUsersSaga() {
  const response = yield call(() => axios.get('http://localhost:4000/users')); //http://적어줘야한다.
  try {
    yield put(getUsersSuccess(response.data));
  } catch (e) {
    yield put(getUsersFailure(e));
  }
}

//감시자
export function* userSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  users: null,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default users;
