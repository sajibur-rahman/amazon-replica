import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase';
import './Header.css';

const Header = () => {
    const [user] =  useAuthState(auth)
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>products</NavLink>
                <NavLink to='/dashboard'>dashboard</NavLink>
                <NavLink to='/orders'>orders</NavLink>
                { user?  <button onClick={() => signOut(auth)}>sign out</button> : <NavLink to='/login'>login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;