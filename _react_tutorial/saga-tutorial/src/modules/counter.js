import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'countr/INCREASE';
const DECREASE = 'countr/DECREASE';
const INCREASE_ASYNC = 'counter/INCRESE_ASYNC';
const DECREASE_ASYNC = 'counter/DECRESE_ASYNC';

export const increase = (num) => ({
  type: INCREASE,
  num,
});
export const decrease = (num) => ({
  type: DECREASE,
  num,
});

const increseAsync = (num) => ({
  type: INCREASE_ASYNC,
  num,
});

const decreseAsync = (num) => ({
  type: DECREASE_ASYNC,
  num,
});

function* increaseAsyncSaga(action) {
  yield delay(1000);
  yield put(increseAsync(action.num));
}

function* decreaseAsyncSaga(action) {
  yield delay(1000);
  yield put(decreseAsync(action.num));
}
export function* counterSaga() {
  yield takeEvery(INCREASE, increaseAsyncSaga);
  yield takeLatest(DECREASE, decreaseAsyncSaga);
}
const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ASYNC:
      return {
        ...state,
        count: state.count + action.num,
      };
    case DECREASE_ASYNC:
      return {
        ...state,
        count: state.count - action.num,
      };
    default:
      return state;
  }
};

export default counter;
