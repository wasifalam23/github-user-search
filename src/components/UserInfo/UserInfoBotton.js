import React from 'react';

const UserInfoBottom = (props) => {
  return (
    <div className="flex items-center gap-3">
      {props.icon}
      <span className="text-slate-800 dark:text-slate-100 text-base">
        {props.info}
      </span>
    </div>
  );
};

export default UserInfoBottom;
