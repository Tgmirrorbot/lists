import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-5 bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer">Product Hunt</a>
      </div>
      <button onClick={toggleDarkMode} className="focus:outline-none mt-4 sm:mt-0">
        {darkMode ? <SunIcon className="h-6 w-6 text-gray-500" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
      </button>
    </header>
  );
}