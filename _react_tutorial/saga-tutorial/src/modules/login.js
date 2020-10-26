const { default: Axios } = require('axios');
const { call, put, takeLatest } = require('redux-saga/effects');

const GET_LOGIN = 'login/GET_LOGIN';
const GET_LOGIN_SUCCESS = 'login/GET_LOGIN_SUCCESS';
const GET_LOGIN_FAILURE = 'login/GET_LOGIN_FAILURE';

export const getLogin = () => ({
  type: GET_LOGIN,
});

const getLoginSuccess = (user) => ({
  type: GET_LOGIN_SUCCESS,
  payload: user,
});

const getLoginFailure = (error) => ({
  type: GET_LOGIN_FAILURE,
  payload: error,
});

function* getLoginSaga() {
  //action
  const response = yield call(() => Axios.get('/userInfo'));
  try {
    yield put(getLoginSuccess(response.data));
  } catch (e) {
    yield put(getLoginFailure(e));
  }
}

export function* loginSaga() {
  yield takeLatest(GET_LOGIN, getLoginSaga);
}

const initalState = {
  users: null,
  error: null,
};

const login = (state = initalState, action) => {
  switch (action.type) {
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case GET_LOGIN_FAILURE:
      return {
        ...state,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default login;
