import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

import AdminApi from "../../services/AdminApi";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoading: true };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    AdminApi.createProduct(payload)
      .then((res) => res.data)
      .then((data) => this.setState({ products: data, isLoading: false }));
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>
              <td>Product Name</td>
              <td>Product Category</td>
            </th>
          </tr>
          {this.state.products.map((product) => (
            <tr>
              <td>
                <Link
                  to={{
                    pathname: "/views",
                    myCustomProps: product.productId,
                  }}
                >
                  {product.productName}
                </Link>
              </td>
              <td>{product.category}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default User;
