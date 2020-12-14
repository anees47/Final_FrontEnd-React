import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions/authAction";

export const Usage = ({ getUser, isAuthenticated }) => {
  console.log(1);
  const onSubmit = (e) => {
    console.log("2");

    console.log("3");
    getUser();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="submit" name="submit"></input>
      </form>
    </div>
  );
};

Usage.propTypes = {
  getUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { getUser })(Usage);
