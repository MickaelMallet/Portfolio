import React, { createContext, useState } from 'react';

// Initialisation du contexte avec une valeur par défaut
export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {}
});

function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;
