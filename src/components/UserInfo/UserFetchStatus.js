import React from 'react';

const UserFetchStatus = (props) => {
  return (
    <div className="text-center mt-4">
      <p className="font-medium text-gray-800 dark:text-gray-100">
        {props.status}
      </p>
    </div>
  );
};

export default UserFetchStatus;
