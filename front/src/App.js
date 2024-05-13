import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExercisePage from "./components/ExercisePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import SignUpPage from "./components/SignUpPage";
import LoginForm from "./components/LogInPage";
import ProfilePage from "./components/ProfilePage";
import NotFind from "./components/NotFind";

function App() {
    return (
        <div className="bg-body-tertiary d-flex flex-column min-vh-100">
            <BrowserRouter>
                <Routes>
                    <Route index element={<ExercisePage/>}/>
                    <Route path="*" element={<NotFind/>} />
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/log-in" element={<LoginForm/>}/>
                    <Route path="/sign-up" element={<SignUpPage/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
