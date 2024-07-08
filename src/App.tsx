import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./pages/Todo";

function App() {
  // const [count, setCount] = useState(0);
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      localStorage.setItem("theme", savedTheme);
      return savedTheme;
    } else if (window.matchMedia("(preferes-color-scheme:light)").matches) {
      localStorage.setItem("theme", "light");
      return "light";
    } else {
      localStorage.setItem("theme", "light");
      return "dark";
    }
  };
  const [colorMode, setColorMode] = useState(getInitialTheme);

  const toggleThemeMode = () => {
    const newTheme = colorMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    // console.log(localTheme);
    setColorMode(newTheme);
    document.body.classList.remove(colorMode);
    document.body.classList.add(newTheme);
  };

  useEffect(() => {
    // localStorage.setItem("theme", "light");
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
      setColorMode(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
      document.body.classList.add("light");
      setColorMode("light");
    } else {
      document.body.classList.add("light");
      setColorMode("dark");
    }
  }, [colorMode]);

  return (
    <div>
      <div className=" dark:bg-black  bg-white">
        <div className=" max-w-7xl min-h-screen  mx-auto">
          <div className="text-center border-l-0 border-r-0 border-t-0 dark:text-white text-balck border-b-lime-400 border flex justify-between">
            <span>Branch:main</span>
            <span>
              <button
                onClick={() => {
                  toggleThemeMode();
                }}
                className="dark:bg-white dark:text-black bg-black text-white px-4 rounded-lg uppercase"
              >
                {(() => {
                  if (colorMode === "dark") {
                    return "LHT";
                  } else {
                    return "DRK";
                  }
                })()}
              </button>
            </span>
          </div>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
