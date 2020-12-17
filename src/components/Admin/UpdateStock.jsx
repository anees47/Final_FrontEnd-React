import React, { useState } from "react";
import { updateStock } from "../../services/AdminApi";
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";

const UpdateStock = (updateStock) => {
  const [click, setClick] = useState(0);
  const [done, setdone] = useState(0);
  const [formData, setFormData] = useState({
    stockId: "",
    productId: "",
    quantity: "",
    location: "",
  });
  const { stockId, productId, quantity, location } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
    //AdminApi.getProductByid(id).then((res)=> console.log(res));

    const updateStock = {
      stockId: stockId,
      productId: productId,
      quantity: quantity,
      location: location,
    };
    e.preventDefault();
    AdminApi.updateStock(updateStock).then((res) => console.log(res));
    setdone(1);
    setClick(1);
    console.log(e);
  };

  if (done === 1 && click === 1) {
    return <Redirect to="/success"></Redirect>;
  } else if (done === 0 && click === 1) {
    return <Redirect to="/fail"></Redirect>;
  }

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Update Stock</h1>
            <p className="lead text-center">update stock information</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Stock Id"
                  name="stockId"
                  required
                  value={stockId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Id"
                  name="productId"
                  required
                  value={productId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Quantity"
                  name="quantity"
                  required
                  value={quantity}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={onChange}
                />
              </div>

              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
