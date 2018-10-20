import React from 'react';
import NewsItemBrief from './NewsItemBrief';

const News = ({ data, error, isFetching, isAuthorized }) => {
  if (isFetching)
    return <div>Loading news...</div>;

  if (error)
    return <div>{error}</div>;

  if (data.length)
    return (
      <div>
        {
          data.map(newsItem => (
            <NewsItemBrief
              key={newsItem._id}
              data={newsItem}
            />
            )
          )
        }
        <p>Total news items: {data.length}</p>
      </div>
    );
  else
    return <div>There are no news yet.</div>;
}

export default News;