import React from 'react';
import SwitchDarkLight from './components/SwitchDarkLight';
import SearchInput from './components/SearchInput';

const App = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 h-screen py-8">
      <main className="max-w-3xl mx-auto mt-32 px-6">
        <header className="flex justify-between font-mono items-center">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-gray-100">
            devfinder
          </h2>
          <SwitchDarkLight />
        </header>
        <SearchInput />
      </main>
    </div>
  );
};

export default App;
