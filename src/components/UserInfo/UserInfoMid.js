import React from 'react';

const UserInfoMid = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-gray-500 dark:text-gray-100">{props.title}</p>
      <span className="font-medium text-xl text-gray-800 dark:text-gray-100">
        {props.value}
      </span>
    </div>
  );
};

export default UserInfoMid;
