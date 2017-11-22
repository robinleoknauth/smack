import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SessionFormContainer from './components/session/session_form_container';
import {AuthRoute, ProtectedRoute} from './utils/route_util';
// import SplashPageContainer from './splashpage/splash_page_container';

const App = () => {
  return (
    <div>
      {/* <AuthRoute path='/' component={SplashPageContainer} /> */}
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/channels/:channelid' component={MainContainer} />
    </div>
  );
};


export default App;
