import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarkModeProvider from './DarkModeContext';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light'; 
        setTheme(currentTheme);
        document.body.setAttribute('data-theme', currentTheme);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.body.removeAttribute('data-theme');
        }
    }

    return (
        <DarkModeProvider>
            {isLoading ? (
                <div className="preloader">
                    <video width="100%" height="100%" autoPlay loop muted>
                        <source src="/preloader.mp4" type="video/mp4" />
                    </video>
                </div>
            ) : (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />             
                    </Routes>
                </Router>
            )}
        </DarkModeProvider>
    );
}

export default App;


