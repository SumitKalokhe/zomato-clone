import React from 'react'
import './login.css'

const Login = () => {

    return (
        <div className='login'>
            <div className='login-icon'>
                <div className='login-name-initial'>S</div>
            </div>
            <div className='user-name'>Sumit</div>
            <img  className="login-down-arrow" src="/navbar-login-images/down-arrow.png" alt="" />
        </div>
    )
}

export default Login;