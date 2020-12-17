import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { Redirect } from "react-router-dom";
export const Login = ({ login, isAuthenticated }) => {
  //const [data,settterfunction]= useState({initail data})
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Final state: " + username);
    console.log("password" + password);
    const loginUser = {
      username: username,
      password: password,
    };

    login(username, password);

    //localStorage.setItem('data',JSON.stringify(response.data))
  };

  if (isAuthenticated) {
    const user = JSON.parse(localStorage.getItem("data"));
    if (user.roles.includes("ROLE_ADMIN")) {
      return <Redirect to="/admin"></Redirect>;
    } else {
      return <Redirect to="/user"></Redirect>;
    }
  }
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your DevConnector account
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { login })(Login);
