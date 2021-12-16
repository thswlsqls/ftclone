import { all, fork } from 'redux-saga/effects';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
// all 부수효과 함수: 함수 내부 배열에 등록된 사가 함수들을 리덕스 사가 미들웨어에 등록함
// form 부수효과 함수: 액션을 발생시킴, 즉, fork(userSaga) == userSaga()
