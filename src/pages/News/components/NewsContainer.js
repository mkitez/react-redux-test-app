import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import News from './News';
import { fetchNews } from '../actions';

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
  }

  render() {
    const { data, error, isFetching, isAuthorized } = this.props;
    return (
      <React.Fragment>
        <News
          data={data}
          error={error}
          isFetching={isFetching}
        />
        {isAuthorized ? <Link to='/news/add'>Add</Link> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.news.items,
  error: state.news.error,
  isFetching: state.news.isFetching,
  isAuthorized: state.session.data
});

export default connect(mapStateToProps)(NewsContainer);