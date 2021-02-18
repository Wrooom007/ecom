import * as actionType from './actions';

export const getProducts = () => {
  return {
    type: actionType.GET_PRODUCT,
  };
};

export const getProductCategoryWise = (data) => {
  return{
    type: actionType.GET_PRODUCT_CAT_WISE,
    category : data
  }
}

export const setProducts = (data) => {
  return {
    type: actionType.SET_PRODUCT,
    payload: data,
  };
};

export const clearProducts = () =>{
  return {
    type: actionType.CLEAR_PRODUCT,
  };
}