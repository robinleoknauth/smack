import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SessionFormContainer from './components/session/session_form_container';
import {AuthRoute, ProtectedRoute} from './utils/route_util';


const App = () => {

  return (
    <div>
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

// <Switch>
// </Switch>

export default App;
