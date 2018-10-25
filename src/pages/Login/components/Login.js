import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorMsg from 'components/ErrorMsg';
import GoogleLogin from 'react-google-login';
import { googleClientId } from 'constants/clientIds';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!(this.email.current.value && this.password.current.value))
      return;
    
    this.props.logIn({
      email: this.email.current.value,
      password: this.password.current.value
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { loginSuccessful, error, isLoading } = this.props;

    if (loginSuccessful)
      return <Redirect to={from} />
    
    if (error && this.password.current)
      this.password.current.value = '';
    return (
      <div>
        <GoogleLogin 
          clientId={googleClientId}
          buttonText='Google Login'
          onSuccess={this.props.gAuthSuccess}
          onFailure={this.props.gAuthError}
          onRequest={this.props.gAuth}
          disabled={isLoading}
          style={{}}
        />
        <ErrorMsg text={error} />
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail:
            <input type='text' name='email' ref={this.email} />
          </label>
          <label>
            Password:
            <input type='password' name='password' ref={this.password} />
          </label>
          <input type='submit' value={isLoading ? 'Loading...' : 'Submit'} disabled={isLoading} />
        </form>
      </div>
    );
  }
}

export default Login;
