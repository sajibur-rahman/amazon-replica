import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>products</NavLink>
                <NavLink to='/dashboard'>dashboard</NavLink>
                <NavLink to='/orders'>orders</NavLink>
                <NavLink to='/login'>login</NavLink>
            </nav>
        </div>
    );
};

export default Header;