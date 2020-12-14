import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authAction";
import { Redirect } from "react-router-dom";

const Register = ({ registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //when state of controller is changing then we are holding that changed value in state
  };
  const onSubmit = (e) => {
    const newUser = {
      username: username,
      email: email,
      password: password,
      role: ["user"],
    };
    e.preventDefault();
    console.log("hello from submit");
    console.log(JSON.stringify(formData));
    if (password !== password2) {
      console.log("problem");
    } else {
      //action
      registerUser(formData);
    }
  };
  if (isAuthenticated === true) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="username"
                  required
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
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

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAusAuthenticated: state.auth.issAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { registerUser })(Register);
