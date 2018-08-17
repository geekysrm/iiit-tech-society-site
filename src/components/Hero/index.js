import React, { Component } from 'react';

import image from '../../images/background.png';

import ImageCarousel from '../Carousel';

import Typing from 'react-typing-animation';

import './style.css';

class Hero extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            societies: [
                "ACM IIIT Chapter",
                "TARS",
                "Mozilla Campus Club",
                "P-Society",
                "PWL"
            ]
        }
    }

    render() 
    {
        return (
            <div className="hero"
                style = {{
                    backgroundImage: `url(${image})`
                }}
            >
                <div className="heading" >
                    <div>
                        Tech Society <br />
                        IIIT-Bhubaneswar 
                    </div>
                    <div className="quote" >
                        " Talk is cheap. Show me the code. "
                    </div>
                    <div className="societies" >
                    <div>
                        -&nbsp;
                    </div>
                    <Typing loop={true}  speed={110}>
                        <span>{this.state.societies[0]}</span>

                        <Typing.Delay ms={1000} />

                        <Typing.Backspace count={this.state.societies[0].length} />
                        <span>{this.state.societies[1]}</span>

                        <Typing.Delay ms={1500} />

                        <Typing.Backspace count={this.state.societies[1].length} />
                        <span>{this.state.societies[2]}</span>

                        <Typing.Delay ms={1000} />

                        <Typing.Backspace count={this.state.societies[2].length} />
                        <span>{this.state.societies[3]}</span>

                        <Typing.Delay ms={1000} />

                        <Typing.Backspace count={this.state.societies[3].length} />
                        <span>{this.state.societies[4]}</span>

                        <Typing.Delay ms={1500} />

                        <Typing.Backspace count={this.state.societies[4].length} />

                    </Typing>
                    <Typing loop={true} speed={300} >
                        _
                        <Typing.Backspace count={1} />
                    </Typing>
                    </div>
                </div>

                <div className="carousel" >
                    <ImageCarousel />
                </div>
            </div>
        );
    }
}

export default Hero;