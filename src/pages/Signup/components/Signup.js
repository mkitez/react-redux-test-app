import React from 'react';
import { Redirect } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import ErrorMsg from 'components/ErrorMsg';
import { reCaptchaId } from 'constants/clientIds';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.captcha = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!(this.email.current.value && this.password.current.value && this.captcha.current.getValue()))
      return;
    
    this.props.signUp({
      email: this.email.current.value,
      password: this.password.current.value,
      captcha: this.captcha.current.getValue()
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { signupSuccessful, error, isLoading } = this.props;

    if (signupSuccessful)
      return <Redirect to={from} />
    
    if (error)
      this.password.current.value = '';
    return (
      <div>
        <ErrorMsg text={error} />
        <form onSubmit={this.handleSubmit}>
          <ReCAPTCHA 
            ref={this.captcha}
            sitekey={reCaptchaId}
          />
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

export default Signup;
