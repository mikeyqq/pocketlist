import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";
import googleButtonImg from "../../assets/images/btn_google_signin_light_normal_web@2x.png";
import "./LoginPage.scss";

const LoginPage = ({ startLogin }) => (
  <div className="login-container">
    <img src={googleButtonImg} alt="googleimage" onClick={startLogin} className="googleButton" />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
