import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';


const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = [...users, input];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setInput({ name: "", email: "", password: "" });
        navigate("/Login");
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        className="form-control"
                        placeholder="Enter a name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name='email'
                        className="form-control"
                        placeholder="Enter an email"
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
                        placeholder="Enter a password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;
