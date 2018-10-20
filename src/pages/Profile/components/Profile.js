import React from 'react';
import ErrorMsg from 'components/ErrorMsg';

const Profile = ({ user, error, isFetching }) => {
  if (isFetching)
    return <div>Loading user data...</div>;
  
  if (error)
    return <ErrorMsg text={error} />;

  return user? <div>Hello {user.displayName}!</div> : null;
}

export default Profile;
