import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MenuFooter.css'

import logoResence from '../../assets/logoResence.png'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LanguageIcon from '@material-ui/icons/Language';
import MailIcon from '@material-ui/icons/Mail';
class MenuFooter extends Component {
    render() {
        return (<>
            <div className='container-fluid top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-5 col-xs-12'>
                            <div>
                                <img className='logoResence' style={{ marginLeft: '-6%' }} src={logoResence} />
                            </div>
                            <div>
                                <h3>About Us</h3>
                                <p>Take a look why having a great website is important</p>
                                <h5 style={{color:'#51A9D1'}}>Contact Us</h5>
                                <small className='small'><PhoneInTalkIcon fontSize='small'  className='mr-3' />+038 217 4344</small><br />
                                <small className='small'><AlternateEmailIcon fontSize='small' className='mr-3' />nhanchikhai@gmail.com</small><br />
                                <small className='small'><LanguageIcon fontSize='small' className='mr-3' />www.presence.com</small><br/>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-5 col-xs-12'>
                            <div>
                                <h3>Information</h3>
                                <p>About Us</p>
                                <p>Leader</p>
                                <p>Member</p>
                                <p>Technology</p>
                                <p>Theme</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-5 col-xs-12'>
                            <div>
                                <h3>Helpful Links</h3>
                                <p><Link className='link' style={{ textDecoration: 'none' }} to='https://faceworks.vn/'>Faceworks</Link></p>
                                <p><Link className='link' style={{ textDecoration: 'none' }} to='https://www.pockethrms.com/'>Pockethrms</Link></p>
                                <p><Link className='link' style={{ textDecoration: 'none' }} to='https://material-ui.com/'>Material-ui</Link></p>
                                <p><Link className='link' style={{ textDecoration: 'none' }} to='https://reactjs.org/'>React Js</Link></p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-5 col-xs-12'>
                            <div>
                                <h3>Subscribe More Info</h3>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><MailIcon style={{color: '#51A9D1'}}/></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div><br/>
                                <button type='button' className='btn' style={{backgroundColor: '#51A9D1'}}><b className='text-light'>Subscribe</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'white', height:'1px'}}></div>
            <div className='container-fluid bot'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 offset-lg-5 col-md-3 offset-md-3 col-sm-5 col-xs-12'>
                            <i className="fab fa-facebook-square "></i>
                            <i className="fab fa-twitter-square" ></i>
                            <i className="fab fa-google-plus-square" ></i>
                        </div>
                        <div className='col-lg-3 offset-lg-1 col-md-5 offset-md-1 col-sm-6 col-xs-12'>
                            <small className='small'><u style={{color:'#51A9D1'}}>© 2020, Presence.</u> All Rights Reserved </small>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MenuFooter;