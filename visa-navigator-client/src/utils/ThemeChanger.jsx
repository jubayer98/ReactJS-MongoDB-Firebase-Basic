import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const ThemeChanger = () => {
    const [isDark, setIsDark] = useState(false); // Track current theme state

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark"; // Toggle theme
        document.documentElement.setAttribute("data-theme", newTheme); // Set data-theme attribute
        setIsDark(!isDark); // Update state
    };

    return (
        <div>
            <button onClick={toggleTheme}>
                {isDark ? <FaRegLightbulb />  : <FaLightbulb />}
            </button>
        </div>
    );
};

export default ThemeChanger;