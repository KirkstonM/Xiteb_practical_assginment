import React from "react";
import './navbar.css';
import { BsPersonFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { Link } from 'react-router-dom';
import SecondNav from "./SecondNav";


export default function Navbar() {

    return (
        <>
            {/* TOP NAVBAR */}
            <nav className="navbar" id="home">
                <div className="nav-logo">
                    <img src="./images/navbar/nav-logo.png" className="logo" alt="logos"/>
                    <h2> Hotel </h2>
                </div>
                <div className="basic-login-section">
                    <div className="sign-in">
                        <BsPersonFill />
                        <Link to='/signin' className="nav-links"> Sign in </Link>
                    </div>

                    <div className="join-now">
                        <Link to='/join' className="nav-links"> Join Now </Link>
                    </div>

                    <div className="reservation">
                        <Link to='/reservation' className="nav-links"> Find Reservation </Link>
                    </div>

                    <div className="language">
                        <FaGlobeAmericas />
                        <span> English</span>
                    </div>

                    <div className="currency">
                        <span> LKR </span>
                    </div>

                    <div className="q-code">
                        <MdOutlineSmartphone />
                    </div>
                </div>
            </nav>

            <SecondNav />
        </>
    )
}