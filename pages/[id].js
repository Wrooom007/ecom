import { useRouter,Router } from 'next/router';
import { getProductById } from '../service/api';
const ProductDetail = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="main">
      <div className="header-part">
        <h2 className=" text-center p-0"> E-Commerce </h2>
      </div>
      <div className="body-part d-flex">
        <div className="product-detail p-1">
          <div className="p-detail-header">
            {' '}
            <span onClick={() => location.href='/'}>{'<< '} Back</span>
          </div>
          <div className="row p-detail-body m-0">
            <div className="col-4 pro-image-div">
              <img className="pro-image" src={props.product.image} />
            </div>
            <div className="col-8 p-detail">
              <h2>{props.product.title}</h2>
              <h4>{props.product.category}</h4>
              <h1>${props.product.price || '0'}</h1>
              <p>{props.product.description}</p>
              <div className="d-flex">
                <button>Add to Cart</button>
                <button>Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-part text-center">© e-commerce 2021. All right reserve.</div>
    </div>
  );
};

ProductDetail.getInitialProps = async (ctx) => {
  const product = await getProductById(ctx.query.id);
  return { product };
};

export default ProductDetail;
