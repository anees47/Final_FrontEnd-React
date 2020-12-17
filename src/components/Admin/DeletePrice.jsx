import React, { useState } from "react";
import AdminApi from "../../services/AdminApi";
import {Redirect} from "react-router-dom";

const DeletePrice = () => {

  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);

  const [id, setid] = useState(0);

  const onChange = (e) => {
    setid(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    AdminApi.deletePrice(id).then((response) => console.log(response));
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
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Delete Price</h1>
          <p className="lead text-center">Enter price id to delete</p>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="price Id"
                name="id"
                required
                onChange={onChange}
              />
            </div>

            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default DeletePrice;
