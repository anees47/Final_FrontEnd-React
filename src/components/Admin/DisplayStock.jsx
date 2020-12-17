import React, { Component } from "react";
import UserApi from "../../services/UserApi";
import "../../App.css";
import AdminApi from "../../services/AdminApi";
export default class DisplayStock extends Component {
  constructor(props) {
    super();
    this.state = {
      stock: {},
      
      id: props.location.state,
    };
    console.log(props.location.state);
  }
  componentDidMount() {
    AdminApi.getStockByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ stock: data }));
  }
  render() {
    return (
      <div className="landing1">
        <div className="container">
          <div className="row">
            <table>
              <tr>
                <td>ProductId</td>
                <td>{this.state.stock.productId}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{this.state.stock.quantity}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{this.state.stock.quantity}</td>
              </tr>
              
            </table>
          </div>
        </div>
        </div>
    );
  }
}