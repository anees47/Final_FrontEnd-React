import React, { Component } from "react";
import UserApi from "../../services/UserApi";
import "../../App.css";
import AdminApi from "../../services/AdminApi";
export default class DisplayReview extends Component {
  constructor(props) {
    super();
    this.state = {
      review: {},
      
      id: props.location.state,
    };
    console.log(props.location.state);
  }
  componentDidMount() {
    AdminApi.getReviewByid(this.state.id)
      .then((res) => res.data)
      .then((data) => this.setState({ review: data }));
  }
  render() {
    return (
      <div className="landing1">
        <div className="container">
          <div className="row">
            <table>
            <tr>
                <td>UserName</td>
                <td>{this.state.review.userName}</td>
              </tr>
              <tr>
                <td>Comment</td>
                <td>{this.state.review.comment}</td>
              </tr>
              <tr>
                <td>ProductId</td>
                <td>{this.state.review.productId}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{this.state.review.rating}</td>
              </tr>
              
             
              
            </table>
          </div>
        </div>
        </div>
    );
  }
}