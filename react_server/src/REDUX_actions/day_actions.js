import { DAYS_REQ, DAYS_SUCCESS, DAYS_FAIL } from './types';

export function daysRequest() {
  return {
    type: DAYS_REQ,
    payload: { daysStatus: 'loading' },
  };
}

export function daysSuccess() {
  return {
    type: DAYS_SUCCESS,
    payload: { daysStatus: 'success' },
  };
}

export function daysFailure() {
  return {
    type: DAYS_FAIL,
    payload: { daysStatus: 'fail' },
  };
}
