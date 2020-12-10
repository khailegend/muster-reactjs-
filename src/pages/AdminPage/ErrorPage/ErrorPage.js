import React, { Component } from 'react';

class ErrorPage extends Component {
    backPageBefore() {
        window.history.back();
       
    }
    render() {
        return (
            <div className='errorPage' style={{backgroundColor: '#34495e' , paddingTop : '10%', paddingBottom : '14%'}}>
                <div className='text-center'>
                    <h1 style={{ fontSize: '800%', color: 'white' }}>404</h1>
                    <h1 style={{ fontSize: '500%', color: 'white' }}>ERROR</h1>
                    <h3 style={{ color: 'white' }}>Page not found :(</h3>
                    <p  style={{ color: 'white' }} className="btn" onClick={this.backPageBefore} > Return to the Default Page </p>
                </div>
            </div>
        )
    }
}

export default ErrorPage;