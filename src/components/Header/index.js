import React from 'react';
import {Link} from "react-router-dom";

import './style.scss';

import Logo from './../../assets/logo.png'

const Header = props => {
    const { currentUser } = props;

    return (
        <header className="header">
            <div className='wrap'>
                <div className='logo'>
                    <Link to="/"><img src={Logo} alt='' /></Link>
                </div>

                <div className='callToActions'>
                    <ul>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
