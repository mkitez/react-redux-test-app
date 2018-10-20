import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data }) => {
  return (
    <div id={data._id}>
      <h2>
        <Link to={`/news/${data._id}`}>
          {data.title}
        </Link>
      </h2>
      <div>{data.content}</div>
    </div>
  );
};