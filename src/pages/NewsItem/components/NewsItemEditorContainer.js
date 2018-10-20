import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import NewsItemEditor from './NewsItemEditor';
import { getItem, addItem, updateItem } from '../actions';

class NewsItemEdtorContainer extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { data, error, isLoading, onSubmit, userId } = this.props;

    if (data && (data.creator !== userId))
      return <Redirect to={`/news/${data._id}`} />;

    return (
      <NewsItemEditor
        data={data}
        error={error}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.match.params.id ? state.newsItem.data : null,
  error: state.newsItem.error,
  isLoading: state.newsItem.isLoading,
  userId: state.session.data ? state.session.data.id : null
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const cb = () => ownProps.history.push('/news');
  const newsItemId = ownProps.match.params.id;
  return {
    loadData: () => newsItemId ? dispatch(getItem(newsItemId)) : null,
    onSubmit: (title, content) => newsItemId ?
      dispatch(updateItem(newsItemId, title, content, cb)) : 
      dispatch(addItem(title, content, cb))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemEdtorContainer);
