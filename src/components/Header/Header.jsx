import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';


const Header = () => {

    const { user, handleSignOut } = useContext(authContext)
    const logOut = () => {
        handleSignOut()
        // .then(user => console.log(user))
        // .catch(err => console.error(err.message))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <p className='ml-2'> <span>{user.email}</span> <span> <button className='btn btn-sm btn-success ml-2 ' onClick={logOut}>Log Out</button></span></p>
                }

            </div>
        </nav>
    );
};

export default Header;