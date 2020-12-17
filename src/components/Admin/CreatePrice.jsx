import React, { useState } from "react";
import { createPrice } from "../../services/AdminApi"
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";

const CreatePrice = (createPrice) => {

  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);

  const [formData, setFormData] = useState({
    productId: "",
    priceValue: "",
  });
  const { productId, priceValue } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
      
    const newPrice = {
        productId: productId,
        priceValue: priceValue,
       
    }
    e.preventDefault();
    AdminApi.createPrice(newPrice).then((res)=>console.log);
    setdone(1);
    setClick(1);
    console.log(e);
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
            <h1 className="display-4 text-center">Create Price</h1>
            <p className="lead text-center">Create the price</p>
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
                  placeholder="Price Value"
                  name="priceValue"
                  value={priceValue}
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

export default CreatePrice;
