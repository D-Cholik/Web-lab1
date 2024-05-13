import React from 'react';
import Footer from './Footer';
import '../style/style.css';
import '../style/sign.css';
import Nav from "./Nav";
const SignUpPage = () => {

    return (
        <>
            <Nav/>
            <section id="user-registration" style={{ marginTop: '-35px' }}>
                <div className="form-container">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block">Name</label>
                            <input type="text" id="name" className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="block">Last Name</label>
                            <input type="text" id="lastname" className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block">Password</label>
                            <input type="password" id="password" className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="level" className="block">English Level</label>
                            <select id="level" className="form-select">
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dob" className="block">Date of Birth</label>
                            <input type="date" id="dob" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-secondary">Sign up</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignUpPage;
