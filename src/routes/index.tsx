import { Switch } from "react-router-dom";

import { Start } from "../pages/Start";
import { SignInDev } from "../pages/SignInDev";
import { SignUpDev } from "../pages/SignUpDev";
import { SignInDevClient } from '../pages/SignInDevClient'
import { PageNotFound } from '../pages/PageNotFound';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

import Route  from './Route';

function index() {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SignInDev} />
      <Route path="/sign-in/client" exact component={SignInDevClient} />
      <Route path="/sign-up/dev" exact component={SignUpDev} />
      <Route path="/login/dev" exact component={Login}/>
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="*" exact component={PageNotFound}/>
    </Switch>
  );
}

export default index;
