import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions/authAction";

export const Usage = ({ getUser, isAuthenticated }) => {
  const onSubmit = (e) => {
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
