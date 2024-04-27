import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../../context/darkMode';

const DarkModeToggle = () => {
  const { enabled, toggle } = useDarkMode();
  return (
    <button
      className="fixed bottom-6 right-6 rounded-full bg-black p-3 text-xl text-white shadow-md shadow-slate-900/50 dark:bg-white dark:text-slate-900 sm:bottom-10 sm:right-10"
      onClick={toggle}
    >
      {enabled ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
