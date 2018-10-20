import React from 'react';
import { Link } from 'react-router-dom';
import ErrorMsg from 'components/ErrorMsg';

const NewsItem = ({ data, error, isLoading, isEditable, deleteItem }) => {
  if (isLoading)
    return <div>Loading content...</div>;
  
  if (error)
    return <ErrorMsg text={error} />;

  if (data) {
    const deleteBtn = isEditable ? <button onClick={deleteItem}>Delete</button> : null;
    const editBtn = isEditable ? <Link to={`${window.location.pathname}/edit`}>Edit</Link> : null;
    
    return (
      <div>
        <h1>{data.title}</h1>
        <div>{data.content}</div>
        {deleteBtn}
        {editBtn}
      </div>
    );
  }
  else {
    return null;
  }
};

export default NewsItem;