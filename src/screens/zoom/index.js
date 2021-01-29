import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import image4 from '../../assets/amandagoflow-img4.jpeg'
import image14 from '../../assets/amandagoflow-img14.JPG'
import './index.css'
import { CalendarToday } from '@material-ui/icons';
import CalendarComp from '../../components/calendar'

const Zoom = () => {
    return (
        <>
        <div className="zoom-picture" alt="amandagoflow">
        <Header/>
           </div>
           <h1 className="book-class">Zoom Classes</h1>
            <div className="all-options">
            <div className="c-flex">
            <h1 className="book-class2 mb-5">Single Class</h1>
           <p className="session-prices">Single class drop in = $15 </p>
            </div>
            <div className="c-flex">
            <h1 className="book-class2 mb-5">Bundle and Save</h1>
            <p className="session-prices">3 classes for = $39 </p>
            <p className="session-prices">6 classes for = $72</p>
            <p className="session-prices">10 classes for = $110</p>
            </div>
            </div>
            <hr />
            <h1 className="book-class">Schedule</h1>
 <div className="class-desc">
 <img src={image14} alt="amandagoflow" className="class-desc-pic3"/>
     <div className="c-flex desc3">
         <p>follow <a href="https://www.instagram.com/amandagoflow/" style={{color: "black", outline: "none", textDecoration: "none"}}>@amandagoflow</a> on Instagram for current zoom class schedule</p>
        {/* <p>Fridays 610-7:00 pm <br/>
Vinyasa Yoga </p>
<p>Saturdays 8:10- 9:00am <br/>
Pilaties 
</p> */}
{/* <p>Whatever date at 610-7:00 pm <br/>
VinWhatevr date at 8:10- 9:00am <br/>
Pilaties 
</p> */}
</div>
</div>
<Link to ="/checkout">
<button className="schedule-btn">Book Zoom Class</button>
</Link>
<hr/>
     <Footer/>
     </> 
   
    );
};

export default Zoom;