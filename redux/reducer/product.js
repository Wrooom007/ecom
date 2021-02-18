import * as actionType from '../action/actions';
import { updateObject } from '../../shared/utility';

let initalState = [];

const products = (state = initalState, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCT:
      return updateObject(state, action.payload);
    case actionType.CLEAR_PRODUCT:
      return [];
    default:
      return state;
  }
};

export default products;
