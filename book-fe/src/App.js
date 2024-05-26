import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalogue from './components/Catalogue';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </Router>
    </div>
  )
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}