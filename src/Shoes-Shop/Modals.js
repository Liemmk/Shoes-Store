import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="modal fade" id="cart-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">XEM CHI TIẾT</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã Sản Phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên sản Phẩm</th>
                      <th>Miêu Tả</th>
                      <th>Miêu Tả Ngắn</th>
                      <th>Số Lượng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{product.id}</td>
                      <td><img src={product.image} alt={product.name} width="100px" height="100px" /></td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.shortDescription}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
              <div className="modal-footer">
                <button type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >Close</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
