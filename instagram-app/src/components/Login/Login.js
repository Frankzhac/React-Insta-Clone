import React from 'react';
import './login.css';
import DocumentTitle from 'react-document-title';
// import { LoginForm } from 'react-stormpath';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

render() {
  return (
  <form className="login-page">
     <h2>Instagram Clone</h2>
     <div className="login-field">
       <input type="text" name="username" placeholder="Phone number, username, or email"
         value={this.state.username} onChange={this.handleInputChange} />
       <br />
       <input type="text" name="password" placeholder="password"
         value={this.state.password} onChange={this.handleInputChange} />
       <br />
       <Button color="#5ca0d3" size="large" onClick={this.handleLoginSubmit}>
       Log In
       </Button>
     </div>
  </form>
  );
}

}


export default Login;
