import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
import image13 from '../../assets/amandagoflow-img13.JPG'

const Classes = () => {
    return (
        <>
        <div className="class-photo">
        <Header/>
        </div>
        <h1 className="book-class">Yoga</h1>
        <h1 className="yoga-philosophy">Philosophy</h1>
        <p className="quotes">“Mindfulness is a tool that we can use in our everyday lives, when we are walking the dog, cutting the vegetables, and sitting in traffic. Mindfulness is at the heart and soul of the yoga practice” -Amanda 
</p>
<hr />
 <div className="class-desc">
 <div className="yoga-div">
 <img className="yoga-pic" src={image13} alt="amandagoflow"/>
 </div>

 <div className="c-flex desc4">
 <h1 className="book-class mb-5">Classes</h1>
<div className="classes-contain">
        <p> All level Vinyasa </p>
        <p>FitFlow  </p>
        <p>Buti Yoga  </p>
        <p>Hot Vinyasa </p>
        </div>
</div>
</div>
<hr/>
<p className="quotes">"Yoga allows you to find a new kind of freedom that you may not have known even existed" - B.K.S lyengar</p>
        <div className="class-types">

        <div className="col-md-4">
<h1 className="priv-sess">Private Sessions</h1>
<Link to="/private"> 
        <button  type="button" className="book-btn">Book private class</button>
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

If the instructor cancels - the client will receive credit for another class or session with instructor. This way the client and instructor can reconvene at another time</p>
<hr/>
  
    <Footer/>
</>
    );
};

export default Classes;