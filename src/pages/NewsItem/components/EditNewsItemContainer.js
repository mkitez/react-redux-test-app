import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import NewsItemEditor from './NewsItemEditor';
import { getItem, updateItem } from '../actions';

class EditNewsItemContainer extends React.Component {
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

const mapStateToProps = state => ({
  data: state.newsItem.data,
  error: state.newsItem.error,
  isLoading: state.newsItem.isLoading,
  userId: state.session.data ? state.session.data.id : null
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    loadData: () => dispatch(getItem(id)),
    onSubmit: (title, content) => dispatch(
      updateItem(id, title, content, () => ownProps.history.push(`/news/${id}`))
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsItemContainer);
