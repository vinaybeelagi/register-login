import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    return (
        <div className="container">
            <h1>Welcome</h1>
            {currentUser && (
                <div>
                    <p>Hello {currentUser.name}</p>
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </div>
            )}
        </div>
    );
};

export default Home;
