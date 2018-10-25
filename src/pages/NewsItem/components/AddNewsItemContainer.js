import React from 'react';
import { connect } from 'react-redux';
import NewsItemEditor from './NewsItemEditor';
import { addItem } from '../actions';

class AddNewsItemContainer extends React.Component {
  render() {
    const { error, onSubmit, isLoading } = this.props;
    return (
      <NewsItemEditor
        error={error}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.newsItem.error,
  isLoading: state.newsItem.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (title, content) => dispatch(
    addItem(title, content, id => ownProps.history.push(`/news/${id}`))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsItemContainer);
