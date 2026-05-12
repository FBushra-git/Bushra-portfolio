import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${theme}`} 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
    >
      <div className="icon-wrapper">
        {theme === 'light' ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
      </div>
      <span className="toggle-text">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
};

export default ThemeToggle;