
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navigationLink() {
    if (this.props.formType === 'login') {
      return <Link className='login-link' to="/signup">sign up</Link>;
    } else {
      return <Link className='login-link' to="/login">log in</Link>;
    }
  }



  //
  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {

    return (
      <div className="login-form-base">

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>

          <div className="login-form">
            <h1>Welcome to !SMACK!</h1>
            <p> Enter your username and password please. </p>
            <p> This is the  {this.props.formType} page </p>
            <p>   Not yet registered? Go to {this.navigationLink()} </p>

            <label>Username:
              <input type="text"

                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <label>Password:
              <input type="password"

                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" className='login-button' />
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
