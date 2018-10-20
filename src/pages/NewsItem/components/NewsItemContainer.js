import React from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import { getItem, deleteItem } from '../actions';

class NewsItemContainer extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { data, error, isLoading, userId, deleteItem } = this.props;
    const isEditable = data && data.creator === userId;

    return (
      <NewsItem
        data={data}
        error={error}
        isLoading={isLoading}
        isEditable={isEditable}
        deleteItem={deleteItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const { data, error, isLoading } = state.newsItem;
  return {
    data,
    error,
    isLoading,
    userId: state.session.data ? state.session.data.id : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteItem: () => dispatch(deleteItem(ownProps.match.params.id, () => ownProps.history.push('/news'))),
  loadData: () => dispatch(getItem(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemContainer);
