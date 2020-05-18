import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import Trand from './Trand';
import Explore from './Explore/Explore';

class Home extends React.Component<RouteComponentProps> {

  render() {
    return (
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/trand' exact={true} component={Trand} />
        <Route path='/explore' exact={true} component={Explore} />
      </Switch>
    );
  }
}

export default withRouter(Home);