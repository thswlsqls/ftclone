import { all, call, put, take, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from '../REDUX_actions/types';

function loginApi(data) {
  // return axios.post('/api/login', data);
  return {
    userData: {
      email: 'test@naver.com',
      userName: 'test',
      gender: 'f',
      isAuth: true,
      image: 'image_src_path',
      isAdmin: false,
      actionUserData: data,
    },
  };
}

function* loginRequest(action) {
  const userData = yield call(loginApi, action.data);
  if (userData.userData !== null) {
    console.log(`로그인 api호출, 서버 응답 결과 : ${userData.userData.email}`);
  }
  try {
    yield put({ type: LOGIN_SUCCESS, data: userData }); //userData를 스토어에 디스패치 시도,
    console.log(`로그인 성공 ${action.data.userName} ${action.data.password}`);
  } catch (err) {
    yield put({ type: LOGIN_FAIL, error: err.response.data }); // 실채하면,
    console.log('로그인 실패');
    // console.log(err.message);
  }
}
//put 부수효과 함수 : 액션을 스토어에 디스패치한다.
function* waitLogin() {
  yield takeLatest(LOGIN_REQ, loginRequest);
  console.log(`로그인 요청 시도 감지`);
}

function* waitlogin2() {
  while (true) {
    yield take(LOGIN_REQ, loginRequest);
  }
}

export default function* userSaga() {
  yield all([waitLogin()]);
}
