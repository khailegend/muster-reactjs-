import React, { Component } from 'react';
import './About.css'
import BgAbout from '../../assets/imgbannercaption4.jpg'
import ImgAbout from '../../assets/about-us.jpg'

class Content extends Component {


    render() {
        return (
            <article className='Content'>
                <section >
                    <img className="BgAbout" src={BgAbout} />
                </section>
                <section className="mainContent container">
                    <h3>
                        <b style={{ color: '#34495e' }}>ABOUT US </b>
                    </h3>
                    <p>
                        Pocket HRMS, previously known as Pocket HCM, is a new age Human Capital Management Solution combining strengths of Cloud and Mobility. It is an end-to-end HR solution with ease of access and extensive features that give you the advantage of simplifying your daily activities while keeping the fun in HR alive.
                    </p>
                    <p>
                        Pocket HRMS is fully scalable HR solution and aims to bring a change in the working dynamics of the HR department. This HRMS Solution takes HR many steps ahead byintroducing revolutionary features like Automated Chat Bot, Interactive Dashboards,Mobility, customizable modules, etc. Real time updates, instant report generation, automation, etc. are few things that today’s HR crave for and Pocket HRMS sits quite well here. Hosted on cloud, Pocket HRMS is the perfect pick-me-up HRMS software for businesses of all sizes and verticals.
                    </p>
                </section>
                <section className="container bg-light">
                    <div className="row">
                        <img className="col-5 mb-3" src={ImgAbout} style={{height: "100%"}}/>
                        <div className="col-7 mt-5">
                            <h3>
                                <b>Vision & Mission</b>
                            </h3>
                            <h5>
                                <b>Our vision behind creating Pocket HRMS and HR bot is to declutter your HR department and make it more friendly, welcoming and efficient.</b>
                            </h5>
                            <p>
                                Simply put, people first is our motto behind developing Pocket HRMS. Successful businesses put their employees at first.
                            </p>
                            <p>
                                We at Pocket HRMS understand this apparent fact. In fact, we believe that people are the most crucial element for any business and the way a business manages its people decides its fate. So in an attempt to help businesses put people first, our HRMS software designed keeping in mind the same ideology. Partnering with Pocket HRMS is not just a business deal, in fact, it is a unison of people blended with a fine mix of technology and intelligence.
                            </p>
                            <p>
                            Though we are aware of the fact that cloud technology is still a sophisticated thing for many, we also acknowledge the fact that an increasing number of companies are jumping onto the cloud bandwagon. With Pocket HRMS, your human resources department would function like never before with improved transparency and efficiency.
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

export default Content