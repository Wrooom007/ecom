import * as actionType from '../action/actions';
import { updateObject } from '../../shared/utility';

let initalState = [];

const products = (state = initalState, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return updateObject(state, action.payload);
    default:
      return state;
  }
};

export default products;
