import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ToDoDashboardPage from "../components/ToDoDashboardPage/ToDoDashboardPage";
import CreateToDoPage from "../components/CreateToDoPage/CreateToDoPage";
import EditToDoPage from "../components/EditToDoPage/EditToDoPage";
import LoginPage from "../components/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ToDoDashboardPage} exact={true} />
          <PrivateRoute path="/create" component={CreateToDoPage} />
          <PrivateRoute path="/edit/:id" component={EditToDoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
