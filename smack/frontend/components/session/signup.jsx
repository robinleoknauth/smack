import React from 'react';

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  render(){
    return(
      <div className="session-form">
        <h3>Sign Up</h3>
        <form>
          <label>
            Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username')} >

            </input>
          </label>
          <label>
            Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleInput('password ')} >

            </input>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>

      </div>
    )
  }

  handleInput(type) {
    return (e) => {
      this.state({[type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/channels') )
  }

};

export default signUp;
