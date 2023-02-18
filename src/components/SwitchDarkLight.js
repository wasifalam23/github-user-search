import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const SwitchDarkLight = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="flex gap-3">
      <span className="uppercase font-semibold dark:text-gray-100">
        {darkSide ? 'Dark' : 'Light'}
      </span>
      <DarkModeSwitch onChange={toggleDarkMode} checked={darkSide} size={20} />
    </div>
  );
};

export default SwitchDarkLight;
