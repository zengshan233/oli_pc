import './AboutUs.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="left">
                <h4>About Us</h4>
                <div className="info">Founded in 2018, Oli Capital is a leading Sydney-based</div>
                <div className="info">financial services and fund management company. We specialise in capital raising for primary and secondary markets, brokerage services and fund management.</div>
                <div className="info">Oli Capital is a boutique fund management company that manages wholesale funds that invest in both Australian and international assets. Our fund management team has extensive experience in listed equity investment across the major exchanges globally.</div>
            </div>
        </div>
    )
}