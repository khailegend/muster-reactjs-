import React, { Component } from 'react';
import FormAddTeacher from './FormAddTeacher'
import TableTeachers from './TableTeachers'
import Grid from '@material-ui/core/Grid';

import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';


class TeacherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects : []
        }
    }

    render() {
        return (
            <div className='Subjects'>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em ' }} >
                    <Grid item xs={12}>
                        <h5 style={{ color: '#34495e' }}>
                            <b> Teacher List </b>
                            <ListAltRoundedIcon className="mb-1" />    
                        </h5>     
                    </Grid>
                    <Grid  item lg={12} md={12} sm={12} xs={12}>
                        <TableTeachers />
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <Grid className="text-center" item lg={6} md={6} sm={12} xs={12}>
                        <FormAddTeacher />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >

                    </Grid>
                </Grid>
                <Grid className='mt-2' container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em' }} >

                </Grid>

            </div >
        )
    }
}

export default TeacherList;