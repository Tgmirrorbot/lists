import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-800">
      <div>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer">Product Hunt</a>
      </div>
      <button onClick={toggleDarkMode} className="focus:outline-none">
        {darkMode ? <SunIcon className="h-6 w-6 text-gray-500" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
      </button>
    </header>
  );
}