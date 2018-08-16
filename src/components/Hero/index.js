import React, { Component } from 'react';
import img1 from '../../backgrounds/001.jpg';
import img2 from '../../backgrounds/002.jpg';
import img3 from '../../backgrounds/003.jpg';
import img4 from '../../backgrounds/004.jpg';

import './style.css';

class Hero extends Component 
{
    render() 
    {
        return (
                <div className="crossfade">
                    <figure 
                        style={{
                            backgroundImage: `url(${img1})`
                        }}
                    ></figure>
                    <figure
                        style={{
                            animationDelay: '6s',
                            backgroundImage: `url(${img2})`
                        }}
                    ></figure>
                    <figure
                        style={{
                            animationDelay: '12s',
                            backgroundImage: `url(${img3})`
                        }}
                    ></figure>
                    <figure
                        style={{
                            animationDelay: '18s',
                            backgroundImage: `url(${img4})`
                        }}
                    ></figure>
                </div>
        );
    }
}

export default Hero;