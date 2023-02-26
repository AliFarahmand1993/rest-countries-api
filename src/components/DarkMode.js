import React, { useState, useEffect } from 'react'

const DarkMode = () => {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <>
            <div className="py-6 px-6 md:px-28 w-full flex-auto justify-between bg-white flex rounded outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all">
                <h1 className="text-lg font-semibold mt-2">Where In The World?</h1>
                <button onClick={handleThemeSwitch} className="shadow rounded  md:text-lg font-semibold border md:py-2 md:px-4 py-1 px-2"><i className="fa fas-light"></i>DarkMode</button>
            </div>
        </>
    )
}

export default DarkMode