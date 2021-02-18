import axios from 'axios';
import {BASE_URL} from '../shared/config';

export const getProduct = async () => {
  let urls = BASE_URL + '/products';
  try {
    let reponse = await axios.get(urls);
    return reponse.data;
  } catch (error) {
    return error.response;
  }
};

export const getCategory = async () => {
  let urls = BASE_URL + '/products/categories';
  try {
    let reponse = await axios.get(urls);
    return reponse.data;
  } catch (error) {
    return error.response;
  }
};

export const getProductCategoryWise = async (categoryName) => {
  let urls = BASE_URL + '/products/category/'+categoryName;
  try {
    let reponse = await axios.get(urls);
    return reponse.data;
  } catch (error) {
    return error.response;
  }
}

export const getProductById = async (id) => {
  let urls = BASE_URL + '/products/'+id;
  try {
    let reponse = await axios.get(urls);
    return reponse.data;
  } catch (error) {
    return error.response;
  }
};
