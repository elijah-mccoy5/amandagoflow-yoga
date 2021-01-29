import React from 'react';
import LearnMore from '../learnmore';
import Testimonials from '../testimonials';
import Header from '../../components/header'
import BigImage from '../../screens/bigimage'
import './index.css'
import Gallery from '../gallery';
import Footer from '../../components/footer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Home = () => {
    return (
        <>
        <div className="hidden">
        <div className="homepage-section">
            <div className="home-image">  
            <Header/>
            <div className="home-words">
             <h1 className="home-header">Lets Flow</h1>
   
</div>
 </div>
        </div>
     
        <LearnMore/>
        <Testimonials/>
        <BigImage/>
        <Gallery/>
        </div>
        <Footer/>
        </>
    );
};

export default Home;