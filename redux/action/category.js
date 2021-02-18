import * as actionType from './actions';

export const getCategory = () => {
  return {
    type: actionType.GET_CATEGORY,
  };
};

export const setCategory = (data) => {
  return {
    type: actionType.SET_CATEGORY,
    payload: data,
  };
};
