import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={props => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
);

//we have double !! to have state.auth.uid return a boolean
//otherwise it will return undefined if its no auth
//or it will return the string of the uid if its auth
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
