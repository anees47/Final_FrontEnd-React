import React, { useState } from "react";
import { createProduct } from "../../services/AdminApi"
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";


const CreateProduct = (createProduct) => {
  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);
  const [formData, setFormData] = useState({
    productname: "",  
    category: "",
    description: "",
    expirydate: "",
  });
  const { productname, category, description, expirydate } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
      
    const newProduct = {
        productname: productname,
        category: category,
        description: description,
        expirydate: expirydate,
    }
    e.preventDefault();
    AdminApi.createProduct(newProduct).then((res)=>console.log);
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
            <h1 className="display-4 text-center">Create Product</h1>
            <p className="lead text-center">Create a product</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Name"
                  name="productname"
                  required
                  value={productname}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Expiry date"
                  name="expirydate"
                  value={expirydate}
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

export default CreateProduct;
