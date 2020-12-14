import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/authAction";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const Header = ({ auth: { isAuthenticated }, logout }) => {
  const value = JSON.parse(localStorage.getItem("data")).roles.includes(
    "ROLE_USER"
  );

  const adminLinks = (
    <Navbar>
      <NavDropdown title="Product">
        <NavDropdown.Item href="/createProduct">
          Create Product
        </NavDropdown.Item>
        <NavDropdown.Item href="/deleteProduct">
          Delete Product
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Price">
        <NavDropdown.Item href="/createPrice">Create Price</NavDropdown.Item>
        <NavDropdown.Item href="/deletePrice">Delete Prrice</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Stock">
        <NavDropdown.Item href="/createStock">Create Stock</NavDropdown.Item>
        <NavDropdown.Item href="/deleteStock">Delete Stock</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Review">
        <NavDropdown.Item href="/createReview">Create Review</NavDropdown.Item>
        <NavDropdown.Item href="/deleteReview">
          Delete a Review
        </NavDropdown.Item>
      </NavDropdown>
      <NavLink to="/findProduct" style={{ marginRight: 10 }}>
        Find product
      </NavLink>
      <NavItem>
        <a onClick={logout} href="#!" style={{ marginRight: 10 }}>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </NavItem>
    </Navbar>
  );
  const userLinks = (
    <Navbar>
      <NavLink to="/findProduct" style={{ marginRight: 10 }}>
        Find product
      </NavLink>

      <NavDropdown title="Review">
        <NavDropdown.Item href="/createReview">Create Review</NavDropdown.Item>
        <NavDropdown.Item href="/deleteReview">
          Delete a Review
        </NavDropdown.Item>
      </NavDropdown>

      <NavItem>
        <a onClick={logout} href="#!" style={{ marginRight: 10 }}>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </NavItem>
    </Navbar>
  );

  const guestLinks = (
    <Navbar expand="lg">
      <NavLink to="/register" style={{ marginRight: 10 }}>
        Register
      </NavLink>

      <NavLink to="/login" style={{ marginRight: 10 }}>
        Login
      </NavLink>
    </Navbar>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> SunHome
        </Link>
      </h1>
      <Fragment>
        {isAuthenticated === true
          ? value
            ? userLinks
            : adminLinks
          : guestLinks}
      </Fragment>
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
