import React, { Component } from 'react';

import image from '../../images/background.png';

import ImageCarousel from '../Carousel';

import './style.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero"
                style = {{
                    backgroundImage: `url(${image})`
                }}
            >
                <div className="heading" >
                    Tech Society <br />
                    IIIT-Bhubaneswar
                </div>

                <div className="carousel" >
                    <ImageCarousel />
                </div>
            </div>
        );
    }
}

export default Hero;