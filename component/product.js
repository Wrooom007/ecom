import React from 'react';

function product(props) {
  return (
    <div className="p-card col-4 mt-2 pl-2 pr-0" onClick={() => location.href=`/${props.id}`}>
      <div className="card">
        <div className="photo">
          <img src={props.image} />
        </div>
        <div className="description">
          <h4>{props.title || 'Popular House Plant'}</h4>
          <h1>${props.price || '0'}</h1>
          <div className="d-flex justify-content-between">
            <button>Add to Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
