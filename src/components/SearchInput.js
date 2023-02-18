import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import UserInfoCard from './UserInfo/UserInfoCard';
import UserFetchStatus from './UserInfo/UserFetchStatus';

const SearchInput = () => {
  const [userInput, setUserInput] = useState('');
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchBtnHandler = (e) => {
    e.preventDefault();

    if (userInput.trim().length === 0) return;

    const fetchUser = async () => {
      setIsLoading(true);
      setIsError(null);
      setUser({});

      try {
        const response = await fetch(
          `https://api.github.com/users/${userInput}`
        );

        if (response.ok) setUserInput('');

        const user = await response.json();

        if (user.message === 'Not Found') {
          setUser({});
          throw new Error('User Not Found!');
        }

        setUser(user);
      } catch (err) {
        console.log(err.message);
        setIsError(err.message);
      }

      setIsLoading(false);
    };

    fetchUser();
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-[7fr_73fr_20fr] shadow-md bg-white dark:bg-slate-700 pl-8 pr-2 rounded-md items-center">
        <MagnifyingGlassIcon className="h-6 text-blue-500" />
        <input
          onChange={userInputChangeHandler}
          value={userInput}
          className="placeholder:text-lg placeholder:text-gray-500 outline-none py-5 dark:bg-slate-700 dark:placeholder:text-slate-100 dark:text-slate-100"
          placeholder="Search GitHub username..."
          type="text"
        />
        <button
          className="bg-blue-500  text-white font-semibold rounded-md py-3 ml-6"
          onClick={searchBtnHandler}
        >
          Search
        </button>
      </div>

      {isError && <UserFetchStatus status={isError} />}
      {isLoading && <UserFetchStatus status="Loading..." />}

      {Object.keys(user).length !== 0 && !isError && (
        <UserInfoCard
          image={user.avatar_url}
          name={user.name}
          login={user.login}
          joined={user.created_at}
          bio={user.bio}
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
          location={user.location}
          twitter={user.twitter_username}
          blog={user.blog}
          company={user.company}
        />
      )}
    </div>
  );
};

export default SearchInput;
