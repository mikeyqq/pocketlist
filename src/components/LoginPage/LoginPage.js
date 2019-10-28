import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";
import googleButtonImg from "../../assets/images/btn_google_signin_light_normal_web@2x.png";
import "./LoginPage.scss";

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Pocket List</h1>
      <p className="box-layout__p">An easy list at anytime, anywhere.</p>
      <img src={googleButtonImg} alt="googleimage" onClick={startLogin} className="googleButton" />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
