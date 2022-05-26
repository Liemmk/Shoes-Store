import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import Modals from "./Modals";

export default class ShoesStore extends Component {
  state = {
    productDetail: null,
  };

  handelSelectProduct = (product) =>{
    
    this.setState({productDetail:product});
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList 
          products={data}
          onSelect={this.handelSelectProduct}/>
        <Modals  product={this.state.productDetail}/>
      </div>
    );
  }
}
