import {React, useState} from 'react'
import logo from '../assets/logo.png'
import logoName from '../assets/logoName.png'
import background from '../assets/background.jpg'
import spotifyIcon from '../assets/spotify-brands-solid.svg'
import { handleLogin } from '../services/auth';
import '../styles/LoginPage.css'

const LoginPage = () => {
    const [loggingIn,setLoggingIn] = useState(false) //for loading icon

  return (
    <div className="login-page" style={{ backgroundImage: `url(${background})` }}>
        <div className='logo-container'>
            <img src= {logo} alt = 'harmoniq-logo' className='logo'/>
            <img src= {logoName} alt = 'harmoniq-logo' className='logo'/>
        
                {!loggingIn ? (
                    <>
                        <h1 className='welcome-header'>Welcome, please log into your Spotify account</h1>
                        <button className='login-button'  onClick={() => handleLogin(setLoggingIn)}> 
                            <img src={spotifyIcon} alt="Spotify icon" className="spotify-icon" />
                            Login with Spotify
                        </button>
                    </>
                ) : (
                        <div className='logging-in'>Logging you in...</div> // Show loading message or spinner
                    )
                }
        </div>
    </div>
  )
}

export default LoginPage
