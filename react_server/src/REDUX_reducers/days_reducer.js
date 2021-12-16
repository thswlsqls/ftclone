import { DAYS_REQ, DAYS_SUCCESS, DAYS_FAIL } from '../REDUX_actions/types';

const INITIAL_STATE = {
  daysPendding: false,
  daysDone: false,
  daysError: null,
  daysData: null,
};

// export default function (state = INITIAL_STATE, action) {
const days_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DAYS_REQ:
      return {
        ...state,
        daysPendding: true,
        daysDone: false,
        daysError: null,
      };
    case DAYS_SUCCESS:
      return {
        ...state,
        daysPendding: false,
        daysDone: true,
        daysData: action.data,
      };
    case DAYS_FAIL:
      return {
        ...state,
        daysPendding: false,
        daysError: action.error,
      };
    default:
      return state; // 리듀서에 이것이 없을 경우, Reducer "[reducer_name]" returned undefined during initialization ... 에러가 발생함
  }
};

export default days_reducer;
