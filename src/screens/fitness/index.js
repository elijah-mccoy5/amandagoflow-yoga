import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import image11 from '../../assets/amandagoflow-img11.JPG'
import './index.css'


import './index.css'
const Fitness = () => {
    return (
        <>
        <div className="fitness-photo">
        <Header/>
        </div>
        <h1 className="book-class fitness">Fitness</h1>
        <div className="class-desc">
 <div className="c-flex desc4">
 <div className="classes-contain">
 <p>Boot Camp</p>
        <p>Mat Pilates</p>
        <p>Fitflow </p>
        <p>Personal Training Sessions </p>
        <p>Small Group Training sessions </p>
        </div>
</div>
</div>
<hr/>
<p className="quotes mt-5 mb-5 ">
"Fitness is a catalyst for positive change, in every aspect of your life.
From how you show up in the world to the quality of sleep you get at night. <br />
The time is always NOW.
Let’s GOFLOW towards those fitness and wellness goals together! I’m here for you. 
Let’s do this!! 

-Amanda
             
                </p>
                <hr/>
        <div className="class-types">
                
        <div className="col-md-4">
<h1 className="priv-sess">Private Sessions</h1>
<Link to="/private"> 
        <button  type="button" className="book-btn">Book private Class</button>
        </Link>
</div>
     
        <div className="col-md-4">
        <h1 className="priv-sess">Zoom Classes</h1>
        <Link to ="zoom">
        <button  type="button" className="book-btn">Book Zoom Class</button>
        </Link>
   </div>
        </div>
        <hr/>
        <p className="book-policy">

        All sales are final. 
If the client has to cancel the session or withdraw from class the client must cancel within 48 hours notice to obtain credit for that session or class. 
If the client does not notify the instructor within 48 hours, there will be no credited 
refund available. 

If the instructor cancels - the client will receive credit for another class or session with instructor.This way the client and instructor can reconvene at another time</p>
<hr/>
  
<Footer/>
</>
    );
};

export default Fitness;