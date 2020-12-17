import React, { Component } from "react";
import UserApi from "../../services/UserApi";
class View extends Component {
  constructor(props) {
    super();
    this.state = {
      product: {},
      stock: {},
      price: {},
      review: {},
      id: props.location.myCustomProps,
    };
  }
  componentDidMount() {
    UserApi.getProductByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ product: data }));

    UserApi.getPriceByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ price: data }));
    UserApi.getStocksByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ stock: data }));
    UserApi.getReviewsByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ review: data }));
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>ProductId</td>
            <td>{this.state.product.productId}</td>
          </tr>
          <tr>
            <td>ProductName</td>
            <td>{this.state.product.productname}</td>
          </tr>
          <tr>
            <td>description</td>
            <td>{this.state.product.description}</td>
          </tr>
          <tr>
            <td>Expiry Date</td>
            <td>{this.state.product.expirydate}</td>
          </tr>
          <tr>
            <td>category</td>
            <td>{this.state.product.category}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{this.state.price.priceValue}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{this.state.stock.quantity}</td>
          </tr>
          <tr>
            <td>Comments</td>
            <td>{this.state.review.comment}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{this.state.review.rating}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default View;
