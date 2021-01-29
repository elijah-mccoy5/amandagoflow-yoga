import React from 'react';
import './index.css'
import {Link } from 'react-router-dom'


const LearnMore = () => {
    return (
        <>
        <div className="learn-more-container">
        {/* <h1 className="happy-text">  Hey! Im Amanda, <br/> and Im so glad you're here</h1> */}
            <hr/>
        <div className="learn-more">
    <p className="learn-more-jt">Yoga &amp; Fitness Instructor</p>  
    <h1 className="learn-more-name">@amandagoflow</h1> 
    </div>
    <div className="learn-btns mb-1">
    <Link to="/about">
    <button className="learn-more-btn">Learn more</button>
    </Link>
    <Link to="/checkout">
    <button className="learn-more-btn">Book a Class</button>
    </Link>
    </div>
    <div className="learn-btns mb-5">
    <Link to="/classes">
    <button className="learn-more-btn">Yoga</button>
    </Link>
    <Link to="/fitness">
    <button className="learn-more-btn">Fitness</button>
    </Link>
    </div>
    </div>
    </>
    );
};     

export default LearnMore;