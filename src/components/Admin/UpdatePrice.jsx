import React, { useState } from "react";
import { updatePrice } from "../../services/AdminApi";
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";

const UpdatePrice = (updatePrice) => {

  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);
  
  const [formData, setFormData] = useState({
    priceId: "",
    productId: "",  
    priceValue: "",
  });
  const {
    priceId,
    productId,  
    priceValue,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
    //AdminApi.getProductByid(id).then((res)=> console.log(res));

    const updatePrice = {
        priceId: priceId,
        productId: productId,
        priceValue: priceValue,
    };
    e.preventDefault();
    AdminApi.updatePrice(priceId,updatePrice).then((res) => console.log(res));
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
            <h1 className="display-4 text-center">Update Price</h1>
            <p className="lead text-center">update Price information</p>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Price Id"
                  name="priceId"
                  required
                  value={priceId}
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
                  placeholder="Product Price"
                  name="priceValue"
                  required
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

export default UpdatePrice;
