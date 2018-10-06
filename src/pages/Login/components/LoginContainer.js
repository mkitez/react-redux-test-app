import { connect } from 'react-redux';
import Login from './Login';
import { logIn } from '../actions';

const mapStateToProps = state => ({
  error: state.session.error,
  loginSuccessful: state.session.userId,
  isLoading: state.session.isLoading
});

const mapDispatchToProps = dispatch => ({
  logIn: credentials => {
    dispatch(logIn(credentials))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);