import { takeEvery, all } from 'redux-saga/effects';
import { initProductSaga,initCategoryProductSaga } from './product';
import { initCategorySaga } from './category';

import * as actionType from '../action/actions';

export function* watchProducts() {
  yield takeEvery(actionType.GET_PRODUCT, initProductSaga);
  yield takeEvery(actionType.GET_PRODUCT_CAT_WISE, initCategoryProductSaga);
}

export function* watchCategory() {
  yield takeEvery(actionType.GET_CATEGORY, initCategorySaga);
}

export default function* rootSaga() {
  yield all([watchProducts(), watchCategory()]);
}
