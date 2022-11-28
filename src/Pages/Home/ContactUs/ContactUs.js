import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-blue-100'>
            <div className="hero">
                <div className="hero-content flex-col my-5">
                    <div className="text-center mt-10">
                        <h4 className='text-3xl text-primary font-bold'>Contact Us</h4>
                    </div>
                    <div className="card flex-shrink-0 w-full">
                        <div className="card-body w-full lg:w-96">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <textarea className="textarea" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;