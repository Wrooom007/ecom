import { put } from 'redux-saga/effects';
import * as actions from '../action/index';
import { getCategory } from '../../service/api';

export function* initCategorySaga(action) {
  try {
    const response = yield getCategory();
    yield put(actions.setCategory(response));
  } catch (error) {
    console.log("[SAGA] ==> ACCESS ==> GET Category SAGA", error);
  }
}

