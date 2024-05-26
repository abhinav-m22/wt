import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:8080/api/auth/login', {
            username,
            password
        });

        if (response.status === 200) {
            navigate('/catalogue');
        } else {
            alert('Invalid username or password');
        }
    }

    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;