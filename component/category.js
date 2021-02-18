import React from 'react';

function category(props) {
  return (
    <>
      <div className={`category-pill d-flex justify-content-between px-2 ${props.selectedCategory == '' ? 'active':''}`} onClick={() => props.categoryHendler('')}>
        <div>{'All'}</div>
        <div> {'>'} </div>
      </div>
      {props.category.map((list, index) => {
        return (
          <div className={`category-pill d-flex justify-content-between px-2 ${props.selectedCategory == list ? 'active':''}`} key={'cat-' + index} onClick={() => props.categoryHendler(list)}>
            <div>{list}</div>
            <div> {'>'} </div>
          </div>
        );
      })}
    </>
  );
}

export default category;
