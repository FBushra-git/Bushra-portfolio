import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-icon">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  )
}

export default ThemeToggle
