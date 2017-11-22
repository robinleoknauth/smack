import { connect } from 'react';
import { createNewUser } from '../../actions/session';
import signUp from './signup'


const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
})
