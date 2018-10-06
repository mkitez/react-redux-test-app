import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { fetchUserIfNeeded } from '../actions';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserIfNeeded());
  }

  render() {
    const { user, error, isFetching } = this.props;
    return <Profile user={user} error={error} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
  error: state.user.error,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(ProfileContainer);
