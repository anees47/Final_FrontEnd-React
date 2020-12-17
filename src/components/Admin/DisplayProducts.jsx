import React, { Component } from "react";
import UserApi from "../../services/UserApi";
import "../../App.css";
import AdminApi from "../../services/AdminApi";
export default class DisplayProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      product: {},
      
      id: props.location.state,
    };
    console.log(props.location.state);
  }
  componentDidMount() {
    AdminApi.getProductById(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ product: data }));
  }
  render() {
    return (
      <div className="landing1">
        <div className="container">
          <div className="row">
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
                <td>category</td>
                <td>{this.state.product.category}</td>
              </tr>
              <tr>
                <td>expiry</td>
                <td>{this.state.product.expirydate}</td>
              </tr>
              
            </table>
          </div>
        </div>
        </div>
    );
  }
}