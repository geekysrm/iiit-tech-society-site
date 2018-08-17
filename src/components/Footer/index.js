import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';

import './style.css';

class Footer extends Component 
{
    render() 
    {
        return (
            <div className="footer-container">
                <div className="footer" >

                    <div className="icon" >
                        <a href="#">
                            <Icon name='facebook official' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='instagram' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='github' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='medium m' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='slack hash' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='mail' size='big' />
                        </a>
                    </div>
                    <div className="icon" >
                        <a href="#">
                            <Icon name='twitter' size='big' />
                        </a>
                    </div>
                
                </div>
                <br />
                <div className="copyright" >
                    &copy; 2018 &middot; Tech Scoiety <br />
                    Handcrafted by &nbsp;
                    <a
                        href="https://sonu12485.github.io/"
                        target="_blank"
                    ><span className="names" >K.Sai Kishan</span></a> &nbsp;
                    &amp; &nbsp;
                    <a
                        href="https://geekysrm.github.io/"
                        target="_blank"
                    ><span className="names" >Soumya Ranjan Mohanty</span></a>
                </div>
                <br />
            </div>
        );
    }
}

export default Footer;