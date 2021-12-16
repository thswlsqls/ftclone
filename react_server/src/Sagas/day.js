import { all, call, put, take, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import { DAYS_REQ, DAYS_SUCCESS, DAYS_FAIL } from '../REDUX_actions/types';

function getDaysApi(data) {
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

function* daysRequest(action) {
  const daysData = yield call(getDaysApi, action.data); //call은 동기적, all은 비동기적 요청

  if (daysData !== null) {
    console.log(`getDays api호출, 서버 응답 결과 : ${daysData}`);
  }
  try {
    yield put({ type: DAYS_SUCCESS, daysData: daysData }); //userData를 스토어에 디스패치 시도,
    // console.log(`로그인 성공 ${action.data.userName} ${action.data.password}`);
  } catch (err) {
    yield put({ type: DAYS_FAIL, error: err.response.data }); // 실채하면,
    console.log('특일 정보 가져오기 실패');
    // console.log(err.message);
  }
}

//put 부수효과 함수 : 액션을 스토어에 디스패치한다.
function* waitDays() {
  yield takeLatest(DAYS_REQ, daysRequest);
  console.log(`특일 정보 가져오기 요청 시도 감지`);
}

export default function* daySaga() {
  yield all([waitDays()]);
}
