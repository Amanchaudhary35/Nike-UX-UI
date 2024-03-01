import React from 'react';
import './hero.css'
import Logo from '../../assets/amazon.png'
import FlipcartLogo from '../../assets/flipkart.png'
import ShueImg from '../../assets/shoe_image.png'


function Hero(props) {
    return (
        <main className='hero'>
            <div className='hero-content'>

                <h1>YOUR FEET
                    DESERVE THE BEST</h1>

                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src={Logo} alt="amazon_logo" />
                        <img src={FlipcartLogo} alt="flipcart_logo" />
                    </div>

                </div>

            </div>
            <div className='hero-img'>
                <img src={ShueImg} alt="shoe_logo" />

            </div>
        </main>
    );
}

export default Hero;