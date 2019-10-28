import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

const Header = ({ startLogout }) => (
  <header className="header-container">
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <button onClick={startLogout} className="header-logout-button">
      Logout
    </button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
