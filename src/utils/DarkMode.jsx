import React from 'react'
import { useState, useEffect } from 'react'

const DarkMode = () => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : 'light'
    });
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark')
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement
        html.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className='text-xl xl:text-2xl text-pink cursor-pointer dark:text-white ml-1 xl:ml-2'>
            {
                theme === 'dark' ? (
                    <i className='bx bx-sun'></i>
                ) : (
                    <i className='bx bx-moon'></i>
                )
            }
        </button>
    )
}

export default DarkMode
