import React, { Component } from "react";

export default class GetProductById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
    };
    this.onChange = this.onChange.bind(this);
    //This will bind this object with your event

    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    //this.props.location.myCustomProps(this.state.productId);
    this.props.history.push(`/product/display`, this.state.productId);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Find By Product ID</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="productId"
                  placeholder="ProductId"
                  name="productId"
                  value={this.state.productId}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}