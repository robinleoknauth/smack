import { connect } from 'react';
import { signup } from '../../actions/session';
import signUp from './signup'


const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
})
