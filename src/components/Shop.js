/* eslint-disable */
import React from 'react';
import Paginator from './Paginator';

const Shop = ({
  numberProducts,
  productsPerPage,
  perPage,
  handleChange,
  page,
  pages,
  prevPage,
  nextPage,
}) => (
  <div className="wrapper">
    <header>
      <h2 className="header__title">All Products</h2>
      <div className="header__number pull-left">
        <p>{numberProducts} Products</p>
      </div>
      <div className="header__perPage pull-right">
        <select value={perPage} onChange={handleChange}>
          <option value="4">4 per page</option>
          <option value="8">8 per page</option>
          <option value="12">12 per page</option>
          <option value="16">16 per page</option>
        </select>
      </div>
      <div className="clearfix"></div>
    </header>
    <div className="row">
        {
          productsPerPage.map(({
            product_image,
            product_name,
            description,
            price,
          }, index) => (
            <div key={ index } className="sm-col-span-12 lg-col-span-3">
              <figure>
                <div className="img-container">
                  <img src={product_image}/>
                </div>
                <figcaption>
                  <h3 className="product__name">{product_name}</h3>
                  <p className="product__description">{description}</p>
                  <h3 className="product__price">{price}</h3>
                </figcaption>
              </figure>
            </div>
          ))
        }
        <div className="clearfix"></div>
    </div>

    <footer>
      <div className="pull-right">
        <Paginator
          dec={prevPage}
          inc={nextPage}
          curPage={page}
          max={pages}
        />
      </div>
      <div className="clearfix"></div>
    </footer>
    <div className="clearfix"></div>
  </div>
);
export default Shop;
