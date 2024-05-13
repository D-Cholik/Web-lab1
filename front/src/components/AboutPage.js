import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from "react-router-dom";
import LearnEnglish from '../img/LearnEnglish.png';
import plainenglish from '../img/plainenglish.jpeg';


const AboutPage = () => {

    return (
        <div style={{height: '100vh', overflowY: 'scroll'}}>
            <Nav/>
            <section id="about" className="mb-8">
                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-first">
                            <p className="text-center">Plain English is for everyone!</p>
                            <p>Plain English is your faithful companion in the world of English language learning. Our
                                lessons cover different levels of difficulty, ranging from beginner to advanced C1.
                                Together we can make your journey to English proficiency a reality!</p>
                        </div>
                        <div className="col-md-6 order-md-last">
                            <img src={plainenglish} className="img-fluid" alt="Plain English"
                                 style={{display: 'block', margin: 'auto'}}/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="exercise" className="m-8" style={{marginBottom: '20px'}}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <img src={LearnEnglish} className="card-img-top img-fluid" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Learn English</h5>
                                    <p className="card-text">Here you will find tasks for B1 level. The tasks include:
                                        grammar, vocabulary, syntax and much more. Join in with the activities.</p>
                                    <Link to='/' className="btn btn-secondary">Go to exercise</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="m-5"></div>
            <Footer/>
        </div>
    );
};

export default AboutPage;
