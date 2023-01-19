import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Dental from '../Dental/Dental';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;