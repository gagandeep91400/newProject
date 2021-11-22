import { DISPLAY_LIST, DISPLAY_LIST_SUCCESS } from "./constant";
import { put, takeLatest,call } from 'redux-saga/effects';
import { displayListSuccess } from "./action";
import axios from 'axios';

export function fetchUser(userId) {
    return axios.get('https://fakestoreapi.com/products/');
  };

export function* displayListSaga(){
    const listData = yield call(fetchUser);
    console.log('data from API',listData)
  yield put({
    type: DISPLAY_LIST_SUCCESS,
    listData
  });
         
      
}

export function* watchDisplayListSaga(){
    yield takeLatest(DISPLAY_LIST, displayListSaga)
}