import React, { useState } from "react";
import { createStock } from "../../services/AdminApi"
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";

const CreateStock = (createStock) => {

  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);
  
  const [formData, setFormData] = useState({
    productId: "",  
    quantity: "",
    location: "",
  });
  const { productId, quantity, location } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
      
    const newStock = {
        productId: productId,
        quantity: quantity,
        location: location,
    }
    e.preventDefault();
    AdminApi.createStock(newStock).then((res)=>console.log);
    console.log(e);
    setdone(1);
    setClick(1);


  };

  if(done===1 && click===1){
    return <Redirect to="/success"></Redirect>
  }
  else if(done===0 && click===1){
    return <Redirect to="/fail"></Redirect>
  
  }


  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Stock</h1>
            <p className="lead text-center">Create a Stock</p>
            <form onSubmit={onSubmit}>
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

export default CreateStock;
