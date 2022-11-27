import React from 'react';
import logo from '../../../assets/logo/favicon.png'
const Footer = () => {
    return (
        <footer className=" p-10 bg-green-200 text-base-content mt-10">
            <div className='footer'>
                <div>
                    <img className="w-20 rounded-full" src={logo} alt="Company Logo" />
                    <p className='text-3xl'>RePhone</p>
                    <p>Providing reliable tech since 2019</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center mt-4'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by RePhone Company Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;