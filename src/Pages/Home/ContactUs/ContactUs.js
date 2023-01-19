import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='my-24 py-12' style={{background: `url(${appointment})`, backgroundSize: 'cover'}}>
            <div className='text-center'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-3xl mb-6 text-white'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered" placeholder="Your Message" cols={42} rows={4}></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default ContactUs;