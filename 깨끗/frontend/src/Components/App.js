import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import Header from "./Header";
import Main from "../Routes/Main";
import Footer from "./Footer"
import Login from "../Routes/Login";
import Classmanagement from '../Routes/Classmanagement'
import ShowGrade from '../Routes/ShowGrade'
import { maintain_login } from "../Modules/login";
import Signup from '../Routes/Signup'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const access_token = Cookies.get("access_token");
    if (access_token) dispatch(maintain_login());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        <Route path="/classmanagement" component={Classmanagement} exact/>
        <Route path="/showGrade" component={ShowGrade} exact/> 
           
      </Switch>
      <Footer/>
    </>
  );
};
export default App;
