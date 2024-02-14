import React from 'react'
import { useNavigate } from'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('users')
    console.log(userName.name)
    const handleLogout = () => {
        localStorage.removeItem('loggedIn')
        navigate('/login')
    }
  return (
    <div>
         <div className="LogoutButtonContainer">
        <button className="LogoutButton" onClick={handleLogout}>
          Logout
        </button>
        
      </div>
      <h1>Welcome {userName.name}</h1>
      <h1>Jai Shree Ram</h1>
      <div className="ImageContainer">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-01/ramlalla_0.jpeg?VersionId=T1a8z0ShCn.zLCBMGHwt.dnx.BWj2aNQ&size=750:*" // Replace with the actual URL of your image
          alt="Lord Rama"
        />
      </div>





    </div>
  )
}

export default Home