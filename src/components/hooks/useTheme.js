import { useEffect, useState } from "react";

const useTheme = () => {
    const colorScheme = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(colorScheme);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange = () => {
            const newMode = userPreference === "dark" ? "dark" : "light";
            setMode(newMode);
            document.documentElement.classList.toggle(
                "dark",
                newMode === "dark"
            );
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return [mode, toggleMode];
};

export default useTheme;
