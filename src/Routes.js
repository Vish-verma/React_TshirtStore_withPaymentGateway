import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import AdminRoutes from "./auth/helper/AdminRoutes";
import UserDashBoard from "./user/UserDashBoard";
import adminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoutes path="/admin/dashboard" exact component={adminDashBoard} />
        <AdminRoutes
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
