import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import image3 from '../../assets/amandagoflow-img3.jpeg'
import './index.css'

const About = () => {
    return (
        // <div style={{backgroundColor: "#8ba0bc"}} >
            <div>
         <div className="about-picture" alt="amandagoflow">
         <Header/>
            </div>

            <div className="about-section2"> 
            <h1 className="book-class ">About Me</h1>
            <div className="c-flex justify-content-center align-items-center pb-5">
 <h1 className="qualifications">Certifications</h1>
 <div >
 <p className="quali">600 hr certified in Yoga </p>
 <p className="quali">100 hr certified in Pilaties </p>
 <p className="quali">Personal Training Certification NASM</p>
 <p className="quali">BA Psychology</p>
 </div>
 </div>
           <p className="about-words">Amanda has a passion for helping others find their personal flow with fitness, holistic health, and wellness.  The soul of her work is based on SELF CARE and believing in the interconnectedness of movement and mindfulness - one flow and breath at a time.

           <br/>Her philosophy on flowing into mindfulness birthed during her college years, where she spent many days stressed out from being a full time working student. After obtaining her BA In psychology at SFSU she realized things needed to change in her life. This began a self explorational journey into the wellness world that led her down the path of yoga and fitness trainings.

           <br/>She is a versatile yoga and fitness instructor who teaches from a place of balance and understanding. She has 600 + hours in yoga certifications and has studied exercise sports medicine through NASM. Through her fiery passion and centered focus she creates the space for helping her clients find their personal edge under the umbrella of mind-body wellness. 

           <br/>She helps deepen the connection with the human body by encouraging modifications and mindfulness tools, developing self support systems. She will give you the tools, techniques, and space to flow into your highest self on and off the mat.  
Lets GOFLOW on this journey together!
 </p>
 <hr/>

             </div>
             <p className="quotes">“Teaching is my passion, and I hope to share this passion with you, come join our GO FLOW community! Together we are stronger.”  -Amanda</p>
 <hr/>
      <Footer/>
        </div>
    );
};

export default About;