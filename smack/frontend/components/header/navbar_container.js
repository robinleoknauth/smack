import React from 'react'
import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import headerDropdown from './header_dropdown';

import NavBar from './navbar_component'
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
