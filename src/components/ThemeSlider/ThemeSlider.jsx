import "./ThemeSlider.css";
import { useState,useEffect } from "react";
function ThemeSlider() {
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
    } catch (e) {
      // if any error just set light mode
      return false;
    }
    // fallback: use system preference
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const setTheme=(isDark) => {
    (isDark)?document.documentElement.setAttribute('data-theme', 'dark'):document.documentElement.setAttribute('data-theme', 'light')
  };
  useEffect(() => {
    setTheme(isDarkMode);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore storage errors (e.g. private mode)
      console.log('Error saving theme to localStorage:', e);
    }
  }, [isDarkMode]);
  return (
    <>
    <label className="switch">
    <input type="checkbox" onChange={()=>setIsDarkMode(!isDarkMode)} checked={isDarkMode}/>
    <span className="slider round"></span>
    </label>
    </>
  );
}

export default ThemeSlider;