import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Content extends Component {
    render() {
        return (
            <article className='container text-center' style={{ paddingTop: '100px' }}>
                <section>
                    <h3>
                        <b style={{ color: '#34495e' }}>CONTACT US</b>
                    </h3>
                    <h2>
                        Drop Your Query Here!
                    </h2>
                    <p className="text-dark">
                        We would love to attend them! Also, do not forget to ask for the 15-day free trial!
                    </p>
                </section>
                <section>
                    <form className="row justify-content-center" noValidate autoComplete="off">
                        <TextField className="col-4 ml-2 mr-2 pl-2 pr-2 mt-2 mb-3" label="Email*" variant="outlined" />
                        <TextField className="col-4 ml-2 mr-2 pl-2 pr-2 mt-2 mb-3" label="Phone*" variant="outlined" />
                        <TextField className="col-4 ml-2 mr-2 pl-2 pr-2 mt-2 mb-3" label="Name*" variant="outlined" />
                        <TextField className="col-4 ml-2 mr-2 pl-2 pr-2 mt-2 mb-3" label="Company Name*" variant="outlined" />
                        <TextField className="col-8 mb-3 mt-2"                    
                            label="Message*"
                            multiline
                            rows={3}
                            variant="outlined"
                        />                         
                    </form>
                        <Button size="large"  color='primary' variant='contained' >
                            <b> Send </b>    
                        </Button>
                </section>
                <section className="mt-4 mb-4 bg-light">
                    <div className="row justify-content-center">
                        <p className="col-4 text-dark mt-2">
                            <b>Address:</b> ITC HCM-City, Trịnh Đình Thảo, Hoà Thạnh, Tân Phú, Hồ Chí Minh<br/>
                            <b>Email:</b> nhanchikhai@gmail.com<br/>
                            <b>Tel:</b> 0382174344
                        </p>
                        <iframe className="col-7" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.470201207463!2d106.6346415938973!3d10.77525379927841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIE5naOG7hyBUaMO0bmcgVGluIFRwLkjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1594033954251!5m2!1svi!2s" width="600" height="300" frameborder="0" style={{ border: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </section>
            </article>
        )
    }
}

export default Content