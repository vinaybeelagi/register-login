import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === input.email && storedUser.password === input.password) {
            // Login successful
            console.log('Login successful');
            // You can add additional logic such as setting authentication state
        } else {
            // Login failed
            console.log('Login failed');
            // You can add additional logic such as displaying error message
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name='email'
                        className="form-control"
                        placeholder="Enter your email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className="form-control"
                        placeholder="Enter your password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
