import React, { Component } from "react";

export default class GetStockById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockId: "",
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
    this.props.history.push(`/stock/display`, this.state.stockId);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Get Stock By Stock Id</h1>
            <p className="lead text-center">Find By Stock ID</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="stockId"
                  placeholder="Stock Id"
                  name="stockId"
                  value={this.state.priceId}
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