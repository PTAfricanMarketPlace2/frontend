import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logoicon.png';

const NavBar = styled.div `
width: 100%;
height: 130px;
background-color: #050505;
display: flex;
`


const Header = () => {
    
    return (
        <NavBar>
        
            <div className='logoCont'><Link to='/'><img className='logo' src={logo} alt='logo'/></Link>
            </div>
            <div className='comName'><p>African Marketplace</p></div>
            <div id='links'>
            <Link to='/login' className='login'>Login</Link>
            <Link to='/signup' className='signup'>Sign Up</Link>
            </div>
        
 
        </NavBar>
    )
}

export default Header;

