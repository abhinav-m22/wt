import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { ThemeContext } from '../context/ThemeContext';

function Home() {

    const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="Home">
      <h1>Welcome to the Online Bookstore</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/catalogue">Catalogue</Link>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Home;
