import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '.././style/log.css';
import '.././style/style.css';
import Footer from "./Footer";
import Nav from "./Nav";
import {Navbar} from "react-bootstrap";

const LoginForm = () => {

    return (
        <>
            <Nav/>
            <div>
                <Navbar/>
                <div className="bg-body-tertiary d-flex flex-column min-vh-100">
                    <section id="login" className="mb-8">
                        <div className="form-container">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block">Email</label>
                                    <input type="email" id="email" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block">Password</label>
                                    <input type="password" id="password" className="form-control"/>
                                </div>
                                <div className="text-center">
                                    <Link to='/'><button type="submit" className="btn btn-secondary">Login</button></Link>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <Footer/>

            </div>
            <Footer/>
        </>
    );
};

export default LoginForm;
