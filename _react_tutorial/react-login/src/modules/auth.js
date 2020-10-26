import createActionType from '../lib/createActionType';
import { call, takeLatest, put } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITAL_FIELD = 'auth/INITAL_FIELD';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILUER] = createActionType('LOGIN');

export const changeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const initalField = () => ({
  type: INITAL_FIELD,
});

export const login = (id) => ({
  type: LOGIN,
  id,
});

function* loginSaga(action) {
  try {
    const response = yield call(authAPI.login, action.id);
    yield put({
      type: LOGIN_SUCCESS,
      payload: response.data,
      meta: response,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILUER,
      payload: e,
      error: true,
    });
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  auth: null,
  authError: null,
  form: {
    id: '',
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authError: null,
      };
    case LOGIN_FAILUER:
      return {
        ...state,
        auth: null,
        authError: action.payload,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        form: {
          [action.key]: action.value,
        },
      };
    case INITAL_FIELD:
      return {
        ...state,
        form: initialState.form,
      };
    default:
      return state;
  }
};

export default auth;
