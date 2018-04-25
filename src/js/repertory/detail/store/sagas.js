import { take, put, call, delay, fork } from 'redux-saga/effects'


export function* getType() {
    yield put({
        type: "REQUEST_USERTYPE"
    });
}

export default function* rootSaga() {
    yield fork(watchIncrementAsync)
}

export function* watchIncrementAsync() {
  try {
    while(true) {
      const action = yield take("REQUEST_USERTYPE")
    }
  } finally {
    console.log('watchIncrementAsync terminated')
  }
}
