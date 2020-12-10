import React, { Component } from 'react';
import imgBanner1 from '../../assets/bannerHome1.jpg';

import img1caption5 from '../../assets/img1caption5.jpg';
import img2caption5 from '../../assets/img2caption5.jpg';
import img3caption5 from '../../assets/img3caption5.jpg';
import img4caption5 from '../../assets/img4caption5.jpg';

import reactDom from 'react-router-dom';
import { Link } from 'react-router-dom'

import './Middle.css';

class Middle extends Component {

    render() {
        return (<>
            <section>
                <div>
                    <div className="Banner" >
                        <img alt="img" src={imgBanner1} />
                    </div>
                    <div id="caption1">
                        <div className="caption1">
                            <div id="Adventages">
                                <ul>
                                    <li>
                                        <i className=" fas fa-tasks"></i>
                                        <p >Teacher can easily manager attendance with their student</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-user-check"></i>
                                        <p>Students can easily attendance from their phones or computers</p>
                                    </li>
                                    <li>
                                        <i className="far fa-calendar-check"></i>
                                        <p>Teachers and students can view their teaching or learning schedule as a timetable</p>
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle"></i>
                                        <p>teacher can easy for make a roll call with their student</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caption2">
                    <div className="box-caption">
                        <p>
                            <i>When students improve their attendance rates,</i><br /> they improve their academic prospects and chances for graduating
                        </p>
                    </div>
                </div>
                <div className="caption3">
                    <div className="CapTion3">
                        <div className="attendanceImg">
                        </div>
                        <div className="Advantages2">
                            <h2>5 advantages of automatic student attendance system</h2>
                            <h4><b>With automatic class attendance system, teachers can more accurately and quickly track student’s time on the classroom. Here are the top ten advantages of implementing Time and Attendance Management solution:</b></h4>
                            <p><i className="fas fa-check"></i> Reduce paperwork and save time and money with mobile and cloud-based attendance management system</p>
                            <p><i className="fas fa-check"></i> Eliminate duplicate data entry and errors in time and attendance entries</p>
                            <p><i className="fas fa-check"></i> Improve visibility to track and manage student attendance and absenteeism across multiple campuses</p>
                            <p><i className="fas fa-check"></i> Real-time status tracking of leave requests</p>
                            <p><i className="fas fa-check"></i> Keep the parents informed about the student’s performance via Email and SMS alerts</p>
                            <br />
                            <button type="button">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="caption4">
                </div>
                <div className='caption5 container'>
                    <div className='row'>
                        <div className='col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-xs-12 mb-1'>
                            <div className='img'>
                                <div className='imgcapa a1'>
                                    <img src={img1caption5} style={{ width: '100%', height: '100%' }}></img>
                                </div>
                                <div className='imgcapb b1'>
                                    <div className='text-center' style={{ lineHeight: '17em' }}>
                                        <Link className='linkcap5' style={{ textDecoration: 'none' }} to='/Login'>Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mb-1' >
                            <div className='img'>
                                <div className='imgcapa a2'>
                                    <img src={img2caption5} style={{ width: '100%', height: '100%' }}></img>
                                </div>
                                <div className='imgcapb b2'>
                                    <div className='text-center' style={{ lineHeight: '17em' }}>
                                        <Link className='linkcap5' style={{ textDecoration: 'none' }} to='/About'>About</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-xs-12  mt-1'>
                            <div className='img'>
                                <div className='imgcapa a3'>
                                    <img src={img3caption5} style={{ width: '100%', height: '100%' }}></img>
                                </div>
                                <div className='imgcapb b3'>
                                    <div className='text-center' style={{ lineHeight: '17em' }}>
                                        <Link className='linkcap5' style={{ textDecoration: 'none' }} to='/Services'>Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mt-1'>
                            <div className='img'>
                                <div className='imgcapa a4'>
                                    <img src={img4caption5} style={{ width: '100%', height: '100%' }}></img>
                                </div>
                                <div className='imgcapb b4'>
                                    <div className='text-center' style={{ lineHeight: '17em' }}>
                                        <Link className='linkcap5' style={{ textDecoration: 'none' }} to='/Contact'>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    }
}

export default Middle;