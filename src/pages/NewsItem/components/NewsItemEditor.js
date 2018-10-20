import React from 'react';
import ErrorMsg from 'components/ErrorMsg';

class NewsItemEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data && this.props.data) {
      this.setState({
        title: this.props.data.title,
        content: this.props.data.content
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!(this.state.title && this.state.content))
      return;

    this.props.onSubmit(
      this.state.title,
      this.state.content
    );
  }

  render() {
    const { error, isLoading } = this.props;
    if (error)
      return <ErrorMsg text={error} />;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        <textarea name='content' value={this.state.content} onChange={this.handleChange} />
        <input type='submit' value={isLoading ? 'Loading...' : 'Submit'} disabled={isLoading} />
      </form>
    );
  }
}

export default NewsItemEditor;
