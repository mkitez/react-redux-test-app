import { connect } from 'react-redux';
import Login from './Login';
import { logIn, gAuth, gAuthSuccess, gAuthError } from '../actions';

const mapStateToProps = state => ({
  error: state.session.error,
  loginSuccessful: state.session.data,
  isLoading: state.session.isLoading
});

const mapDispatchToProps = { logIn, gAuth, gAuthSuccess, gAuthError };

export default connect(mapStateToProps, mapDispatchToProps)(Login);