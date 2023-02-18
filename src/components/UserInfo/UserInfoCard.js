import React from 'react';
import moment from 'moment';

import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';

import UserInfoMid from './UserInfoMid';
import UserInfoBottom from './UserInfoBotton';
import TwitterSvg from './TwitterSvg';

const UserInfoCard = (props) => {
  const joinedDate = moment(props.joined).format('DD MMM YYYY');

  const getInfo = (info) => {
    return info ? info : 'Not Available';
  };

  return (
    <section className="mt-6 bg-white dark:bg-slate-700 p-10 shadow-sm rounded-md flex items-start gap-8">
      <img className="w-32 rounded-full" src={props.image} alt="user-erik" />

      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-between w-full mt-2">
          <div>
            <h2 className="text-2xl text-gray-800 dark:text-slate-100 font-semibold ">
              {props.name}
            </h2>
            <p className="text-base text-blue-500">@{props.login}</p>
            <p className="text-base text-gray-500 dark:text-gray-300 mt-4">
              {props.bio ? props.bio : 'This person has no bio'}
            </p>
          </div>

          <p className="text-base text-gray-600 dark:text-gray-200">
            Joined {joinedDate}
          </p>
        </div>

        <div className="flex justify-between bg-slate-100 dark:bg-slate-800 pl-6 py-4 pr-10 rounded-md">
          <UserInfoMid title="Repos" value={props.repos} />
          <UserInfoMid title="Followers" value={props.followers} />
          <UserInfoMid title="Following" value={props.following} />
        </div>

        <div className="grid grid-cols-2 gap-y-2">
          <UserInfoBottom
            icon={
              <MapPinIcon className="w-5 text-slate-800 dark:text-slate-100" />
            }
            info={getInfo(props.location)}
          />

          <UserInfoBottom
            icon={
              <TwitterSvg className="w-5 fill-slate-800 dark:fill-slate-100" />
            }
            info={getInfo(props.twitter)}
          />

          <UserInfoBottom
            icon={
              <LinkIcon className="w-5 text-slate-800 dark:text-slate-100" />
            }
            info={getInfo(props.blog)}
          />

          <UserInfoBottom
            icon={
              <BuildingOffice2Icon className="w-5 text-slate-800 dark:text-slate-100" />
            }
            info={getInfo(props.company)}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInfoCard;
