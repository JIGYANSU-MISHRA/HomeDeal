import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext(null);

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true"; 
    });

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode); 
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
