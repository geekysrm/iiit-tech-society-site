import React, { Component } from 'react';

import SocietyCard from "../SocietyCard";

import './style.css';

import acm from '../../images/societies_logo/acm.jpg';
import p_society from '../../images/societies_logo/p-society.png';
import mozilla from '../../images/societies_logo/mozilla.svg';

class Societies extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            societies: [
                {
                    title: "ACM Students Chapter",
                    description: "....................",
                    image: acm,
                    link: "#"
                },
                {
                    title: "TARS",
                    description: "The Automation and Robotics Scoiety",
                    image: "https://via.placeholder.com/300x300?text=IMAGE",
                    link: "#"
                },
                {
                    title: "P-Society",
                    description: "....................",
                    image: p_society,
                    link: "#"
                },
                {
                    title: "Mozilla Campus Club",
                    description: "....................",
                    image: mozilla,
                    link: "#"
                },
                {
                    title: "PWL",
                    description: "Papers We Love ",
                    image: "https://via.placeholder.com/300x300?text=IMAGE",
                    link: "#"
                },
            ]
        };
    }

    renderSocietyCards = () =>
    {
        return this.state.societies.map( society => {
            return (
                <div>
                    <SocietyCard
                        image={society.image}
                        title={society.title}
                        description={society.description}
                        link={society.link}
                    />
                </div>
            );
        });
    }

    render() 
    {
        return (
            <div>
                <div className="page-heading" >
                    Divided By Interests, United By College
                </div>
                
                <br />
                
                <div className="card-container" >

                    {this.renderSocietyCards()}

                </div>
            </div>
        );
    }
}

export default Societies;