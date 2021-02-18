import { put } from 'redux-saga/effects';
import * as actions from '../action/index';
import { getProduct, getProductCategoryWise } from '../../service/api';

export function* initProductSaga(action) {
  try {
    const response = yield getProduct();
    yield put(actions.setProducts(response));
  } catch (error) {
    console.log("[SAGA] ==> ACCESS ==> GET Product SAGA", error);
  }
}

export function* initCategoryProductSaga(action) {
  try {
    if(action.category == ""){
      const response = yield getProduct();
      yield put(actions.clearProducts());
      yield put(actions.setProducts(response));
    }else{
      const response = yield getProductCategoryWise(action.category);
      yield put(actions.clearProducts());
      yield put(actions.setProducts(response));
    }
  } catch (error) {
    console.log("[SAGA] ==> ACCESS ==> GET Product SAGA", error);
  }
}
