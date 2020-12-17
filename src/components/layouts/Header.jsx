import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/authAction";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const Header = ({ auth: { isAuthenticated }, logout }) => {
  let value,
    value1 = 0;
  if (JSON.parse(localStorage.getItem("data"))) {
    if (JSON.parse(localStorage.getItem("data").includes("ROLE_ADMIN"))) {
      value = 2;
    } else {
      value = 1;
    }
  } else {
    value = 0;
  }

  if (JSON.parse(localStorage.getItem("isAuth"))) {
    value1 = 1;
  } else {
    value1 = 0;
  }

  const adminLinks = (
    <Navbar>
      <NavDropdown title="Product">
        <NavDropdown.Item href="/product/create">
          Create Product
        </NavDropdown.Item>
        <NavDropdown.Item href="/product/update">
          Update Product
        </NavDropdown.Item>
        <NavDropdown.Item href="/product/delete">
          Delete Product
        </NavDropdown.Item>
        <NavDropdown.Item href="/product/getProductById">
          Get Product By Id
        </NavDropdown.Item>

      </NavDropdown>

      <NavDropdown title="Price">
        <NavDropdown.Item href="/price/create">Create Price</NavDropdown.Item>
        <NavDropdown.Item href="/price/update">Update Price</NavDropdown.Item>
        <NavDropdown.Item href="/price/delete">Delete Price</NavDropdown.Item>
        <NavDropdown.Item href="/price/getPriceById">Get Price</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Stock">
        <NavDropdown.Item href="/stock/create">Create Stock</NavDropdown.Item>
        <NavDropdown.Item href="/stock/update">Update Stock</NavDropdown.Item>
        <NavDropdown.Item href="/stock/delete">Delete Stock</NavDropdown.Item>
        <NavDropdown.Item href="/stock/getStockById">Get Stock</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Review">
        <NavDropdown.Item href="/review/create">Create Review</NavDropdown.Item>
        <NavDropdown.Item href="/review/update">Update Review</NavDropdown.Item>
        <NavDropdown.Item href="/review/delete">Delete Review</NavDropdown.Item>
        <NavDropdown.Item href="/review/getReviewById">Get Review</NavDropdown.Item>
      </NavDropdown>
      <NavLink to="/user" style={{ marginRight: 10 }}>
        Find product
      </NavLink>
      <NavItem>
        <a onClick={logout} href="/" style={{ marginRight: 10 }}>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </NavItem>
    </Navbar>
  );
  const userLinks = (
    <Navbar>
      <NavLink to="/user" style={{ marginRight: 10 }}>
        Find product
      </NavLink>

      <NavDropdown title="Review">
        <NavDropdown.Item href="/review/create">Create Review</NavDropdown.Item>
        <NavDropdown.Item href="/review/delete">
          Delete Review
        </NavDropdown.Item>
        <NavDropdown.Item href="/review/update">Update Review</NavDropdown.Item>
      </NavDropdown>
     

      <NavItem>
        <a onClick={logout} href="/" style={{ marginRight: 10 }}>
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
          ? value === 2
            ? adminLinks
            : userLinks
          : value1 === 1
          ? value === 2
            ? adminLinks
            : userLinks
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
