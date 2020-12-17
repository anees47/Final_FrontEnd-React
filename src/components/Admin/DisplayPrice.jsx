import React, { Component } from "react";
import UserApi from "../../services/UserApi";
import "../../App.css";
import AdminApi from "../../services/AdminApi";
export default class DisplayPrice extends Component {
  constructor(props) {
    super();
    this.state = {
      price: {},
      
      id: props.location.state,
    };
    console.log(props.location.state);
  }
  componentDidMount() {
    AdminApi.getPriceByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ price: data }));
  }
  render() {
    return (
      <div className="landing1">
        <div className="container">
          <div className="row">
            <table>
              <tr>
                <td>ProductId</td>
                <td>{this.state.price.productId}</td>
              </tr>
              <tr>
                <td>Price Id</td>
                <td>{this.state.price.priceId}</td>
              </tr>
              <tr>
                <td>Product Value</td>
                <td>{this.state.price.priceValue}</td>
              </tr>
              
            </table>
          </div>
        </div>
        </div>
    );
  }
}