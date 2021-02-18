import { useState, useEffect } from 'react';
import Product from '../component/product';
import Category from '../component/category';
import { getProducts, getCategory, getProductCategoryWise } from '../redux/action/index';
import { connect } from 'react-redux';

const Home = (props) => {
  const [category, setCategory] = useState('');

  const categoryHendler = (category) => {
    setCategory(category);
    props.getProductListCategoryWise(category);
  };

  useEffect(async () => {
    await props.getProductList();
    await props.getCategoryList();
  }, []);

  return (
    <div className="main">
      <div className="header-part">
        <h2 className=" text-center p-0"> E-Commerce </h2>
      </div>
      <div className="body-part d-flex">
        <div className="category-part p-1">
          <Category
            category={props.category}
            selectedCategory={category}
            categoryHendler={categoryHendler}
          />
        </div>
        <div className="product-part p-1 pr-2">
          <div className="product-part-header row m-0 pb-2 pt-2"><h4>Product</h4> {" "} {category != '' ? <span className="product-category">{"> "} {category}</span> : "" }</div>
          <div className="product-part-body row m-0 mt-1">
            {props.product.map((pro, i) => (
              <Product key={'product-' + i} {...pro} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-part text-center">© e-commerce 2021. All right reserve.</div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  // const product = [];
  // const category = [];
  // return { product, category };
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: () => dispatch(getProducts()),
    getCategoryList: () => dispatch(getCategory()),
    getProductListCategoryWise: (data) => dispatch(getProductCategoryWise(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
