import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import AdminApi from "../../services/AdminApi";

const CreateReview = () => {

  const [click,setClick]=useState(0);
  const [done,setdone]=useState(0);

  const [reviewData, setReviewData] = useState({
    userName: "",
    comment: "",
    productId: "",
    rating: "",
  });

  const { userName, comment, productId, rating } = reviewData;
  const onChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const newReview = {
      userName: userName,
      comment: comment,
      productId: productId,
      rating: rating,
    };
    e.preventDefault();
    console.log(reviewData);
    AdminApi.createReview(newReview).then((response) =>

      console.log(response)
    );
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
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add a Review</h1>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User Name"
              name="userName"
              value={userName}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Comment"
              name="comment"
              value={comment}
              onChange={onChange}
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Product Id"
                name="productId"
                value={productId}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Rating"
                name="rating"
                value={rating}
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
export default CreateReview