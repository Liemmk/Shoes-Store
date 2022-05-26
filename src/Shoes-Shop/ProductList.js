import React, { Component } from "react";


export default class ProductList extends Component {
  render() {
    const { products, onSelect } = this.props;

    return (
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-4">
              <div className="card mb-4">
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                  <h3 className="card-title">
                    {product.name}
                  </h3>
                  <p className="card-text">
                    {product.price} $
                  </p>
                  <button className="btn btn-success"
                    data-bs-toggle="modal" 
                    data-bs-target="#cart-modal"
                    onClick={() => onSelect(product)}
                  >Xem chi tiết</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
