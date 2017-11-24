import LoginGuest from './guestlogin';
import { connect } from 'react-redux';
import { login  } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(LoginGuest)
