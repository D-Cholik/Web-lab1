import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../img/brand.png'


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand gap-2" to='/about'>
                    <img src={brand} className="" alt="..." style={{ width: '60px', height: '50px' }} />
                    Plain English
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/profile'>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/log-in'>Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/sign-up'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
