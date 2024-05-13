import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import {Link} from "react-router-dom";
import back from '../img/back.png'

const ProfilePage = () => {

    return (
        <>
            <Nav/>
            <div className="form-container">
                <h1 className="text-center">Profile page</h1>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>Dmytro</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name</th>
                        <td>Cholovenko</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>dmytro.cholovenko@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">English Level</th>
                        <td>B1</td>
                    </tr>
                    <tr>
                        <th scope="row">Birth date</th>
                        <td>03.04.2004</td>
                    </tr>
                    </tbody>
                </table>
                <Link to='/about'><img src={back} width="40" height="40" className="rounded float-end"/></Link>
            </div>
            <Footer/>
        </>
    );
};

export default ProfilePage;
