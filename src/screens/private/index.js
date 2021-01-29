import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import image2 from '../../assets/amandagoflow-img2.jpeg'
import image4 from '../../assets/amandagoflow-img4.jpeg'
import image15 from '../../assets/amandagoflow-img15.JPG'
import './index.css'

const Private = () => {
    return (
            <>
         <div className="private-picture" alt="amandagoflow">
         <Header/>

            </div>
            <h1 className="book-class mb-5">Private Session</h1>
            <hr/>
             <div className="all-options">
             <div className="c-flex justify-content-center">
             <h1 className="book-class mb-5 mt-5">Single Sessions</h1>
            <p className="session-prices">35 mins = $30</p>
            <p className="session-prices">50 mins = $40</p>
            <p className="session-prices">60 mins = $50</p>
            <p className="session-prices">75 mins = $65</p>
            <p className="session-prices">90 mins = $80</p>
             </div>
             <div className="c-flex">
             <h1 className="book-class mb-5">Bundles</h1>
             <p className="session-prices">5 for 35 mins = $130</p>
             <p className="session-prices">5 for 50 mins = $180</p>
             <p className="session-prices">5 for 60 mins = $230</p>
             <p className="session-prices">5 for 75 mins = $305</p>
             <p className="session-prices">5 for 90 mins = $350 </p>
             </div>
             </div>
             <hr />
        <h1 className="session-lets">Yoga | Fitness | Mindfulness </h1>
 <div className="class-desc class1">
 <img src={image2} alt="amandagoflow" className="class-desc-pic"/>
     <div className="c-flex desc2">
<p className="book-policy2">Join in for a stress free environment, that allows you to flow towards elevated mind-body wellness. Specifically crafted one-on-one sessions to meet your goals from the comfort your own home. All sessions are aimed at building strength, flexibility, and balance.</p>
 
</div>

</div>
<h1 className="session-lets">Come Flow with me! </h1>
 <div className="class-desc">
 <img src={image15} alt="amandagoflow" className="class-desc-pic2"/>
     <div className="c-flex desc2">
     <p className="book-policy2 ">
     <p className="book-policy"> Amanda offers: 1-on-1</p>
1). Personal Training sessions <br/>
2). Private Yoga sessions<br/>
3). Private Pilates sessions <br/>

4). Or Small group exercise sessions 3-5 people (grab your friends or coworkers!) <br/>

5). Corporate Company Classes <br/>

6). Community movement classes (via yoga studio & hosted events etc) <br/>

All sessions can take place within 30 to 90 minutes in length, via zoom or in person. Contact @amandagoflow for specific inquires.  </p> 
</div>
</div>
<Link to ="/checkout">
<button className="schedule-btn">Schedule Private Session</button>
</Link>

      <Footer/>
        </>
    );
};

export default Private;