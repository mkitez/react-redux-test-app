import { connect } from 'react-redux';
import Signup from './Signup';
import { signUp } from '../actions';

const mapStateToProps = state => ({
  error: state.signup.error,
  signupSuccessful: state.session.data,
  isLoading: state.signup.isLoading
});

const mapDispatchToProps = { signUp };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);