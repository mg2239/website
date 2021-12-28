import { useDarkMode } from '../../context/darkMode';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { enabled, toggle } = useDarkMode();
  return (
    <button
      className="fixed right-6 bottom-6 p-3 text-xl text-white dark:text-slate-900 bg-slate-900 dark:bg-white rounded-full shadow-md shadow-slate-900/50 sm:right-10 sm:bottom-10"
      onClick={toggle}
    >
      {enabled ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
