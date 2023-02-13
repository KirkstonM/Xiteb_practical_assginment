import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import { Button, Navbar } from "react-bootstrap";


export default function SecondNav() {

    return (
        <>
            <Navbar bg="warning" variant="dark">
                <ul className="container">
                    <li>
                        <Link to='/'> ABOUT </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                {/* start of new category of sub menus */}
                                <h3 className="menu-cathegory"> About the hotel</h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Over View</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Explore Colombo</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Services & Facilities</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Map & Directions</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </li>

                    {/* next tab */}
                    <li>
                        <Link to='/'> ROOM & SUITS </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Rooms </h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Deluxe Lake View</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Deluxe Ocean View</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Premier Balcony</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Premier Ocean View</Link>
                                    </li>
                                </ul>
                                {/* THE SINGLE BOTTOM ELEMENT */}
                                <ul>
                                    <li>
                                        <Link to='/' > ROOMS & SUITES OVERVIEW</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Horizon Club </h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Horizon Club Lake View</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Horizon Club Ocean View</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Suites </h3>
                                <ul>
                                    <li>
                                        <Link to='/' >Executive Suites</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Specialty Suites</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Shangri-La Suite</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Connecting Rooms </h3>
                                <ul>
                                    <li>
                                        <Link to='/' >Executive Suite & Premier Ocean Room Connecting</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Two Deluxe Lake View Rooms Connecting</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* DINNING SECTION */}
                    <li>
                        <Link to='/'> DINNING </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                {/* start of new category of sub menus */}
                                <h3 className="menu-cathegory"> Restaurants</h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Cake Temptations by Shangri-La Colombo</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Shang Palace</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Capital Bar & Grill</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Central</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Link to='/' > DINING OVERVIEW</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Bars & Lounges </h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Sapphyr Lounge</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Capital Bar & Grill</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Pool Bar</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* experience */}
                    <li>
                        <Link to='/'> EXPERIENCE </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                {/* start of new category of sub menus */}
                                <h3 className="menu-cathegory"> For Kids</h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Overview</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Adventure Zone</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Celebrations</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Health & Leisure </h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Overview</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Health Club</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Chi, The Spa </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* EVENT SECTION */}
                    <li>
                        <Link to='/'> EVENTS </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                {/* start of new category of sub menus */}
                                <h3 className="menu-cathegory"> Meetings & Events</h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Overview</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Experience It</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Meet Work Create</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Outside Catering</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Request For Proposal</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-col-1">
                                <h3 className="menu-cathegory"> Wedding and Celebrations </h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Overview</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Wedding Planning</Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Weddings By Shangri-La </Link>
                                    </li>
                                    <li>
                                        <Link to='/' > Request for Proposal </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* GALLERY SECTION */}
                    <li>
                        <Link to='/'> GALLERY </Link>
                    </li>

                    {/* OFFERS SECTION */}
                    <li>
                        <Link to='/'> OFFERS </Link>
                    </li>

                    {/* MORE SECTION */}
                    <li>
                        <Link to='/'> MORE </Link>
                        <div className="menu-sub">
                            <div className="menu-col-1">
                                {/* start of new category of sub menus */}
                                <h3 className="menu-cathegory"> Apartments</h3>
                                <ul>
                                    <li>
                                        <Link to='/' > Learn More</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </li>
                    <Button className="search-btn"> FIND A HOTEL </Button>
                </ul>


            </Navbar>
        </>

    )
}
