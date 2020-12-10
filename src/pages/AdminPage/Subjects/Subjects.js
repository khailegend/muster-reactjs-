import React, { Component } from 'react';
import SubjectsIT from './SubjectsIT';
import SubjectsBAF from './SubjectBAF'

import SubjectIcon from '@material-ui/icons/Subject';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class Subjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects : []
        }
    }

    // UNSAFE_componentWillMount() {
    //     const url = 'https://main.musterapis.xyz';
    //     let token = localStorage.getItem('token');
    //     const options = {
    //         method: 'GET',
    //         url: `${url}/subjects`,
    //         headers: {
    //             authorization: `Bearer ${token}`
    //         },
    //     }

    //     axios(options)
    //         .then(res => {
    //             let subjects = res.data.data
    //             this.setState({
    //                 subjects : subjects
    //             })
               
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })

    // }


    render() {
        return (
            <div className='Subjects'>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em ' }} >
                    <Grid item xs={12}>
                        <h5 style={{ color: '#34495e' }}>
                            <b> Subjects </b>
                            <SubjectIcon className="mb-1"/>    
                         </h5>
                        
                    </Grid>
                    <Grid className="text-center" item lg={6} md={6} sm={12} xs={12}>
                        <SubjectsIT />
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <Grid className="text-center" item lg={6} md={6} sm={12} xs={12}>
                        <SubjectsBAF />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >

                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default Subjects;