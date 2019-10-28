import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

const Header = ({ startLogout }) => (
  <header className="header-container">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard" className="header-container__title">
          <h1>Pocketlist</h1>
        </Link>
        <Link to="/create" className="header-container__create">
          <h1>Create Item</h1>
        </Link>
        <button onClick={startLogout} className="header-logout-button">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
