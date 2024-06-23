import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="mx-5 px-2 py-1 text-2xl transition duration-700 border-2 border-[--secondary-alt] rounded bg-tertiary hover:scale-105"
    >
      {isDark ? (
        <FaMoon title="Mudar para o modo claro" />
      ) : (
        <FaSun title="Mudar para o modo escuro" />
      )}
    </button>
  );
};

export default ThemeToggle;
