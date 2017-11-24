import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const demoUser={ user: { username:"Guest", password:"123456" } };

const mapStateToProps = (state) => {

  return {

    loggedIn: Boolean(state.session.currentUser),
    // errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    loginGuest: () => dispatch(login(demoUser)),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
