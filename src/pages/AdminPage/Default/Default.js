import React, { Component } from 'react'

import './Default.css'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import { connect } from 'react-redux';

import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Default extends Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date,
            data: {},

            NOsubjects : 0,
            NOstudents : 0,
            NOteachers : 0,
            NOclasses : 0
        }

        this.data = [
            {
                id: 123,
                class: 'CD18LW(CLC1)',
                NoS: 20,
                subjects: 'IOT',
                teacher: 'Gia Bao',
                attendance: false,
                date: '2020-5-21'
            },
            {
                id: 124,
                class: 'CD18LW(CLC2)',
                NoS: 25,
                subjects: 'CCNA',
                teacher: 'TAN DUNG',
                attendance: false,
                date: '2020-5-21'
            },
        ]
    }

    showTableDefault = (data) => {
        var result = null
        if (data.length > 0) {
            result = data.map((data, index) => {
                if (data.date === this.state.date) {
                    return (
                        <TableRow key={data.id}>
                            <TableCell component="th" scope="row">
                                {data.class}
                            </TableCell>
                            <TableCell align="right">{data.NoS}</TableCell>
                            <TableCell align="right">{data.subjects}</TableCell>
                            <TableCell align="right">{data.teacher}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    );
                }
            });
        }
        return result;
    }

    render() {
        let { subjects, students, teachers, classes } = this.props
        let { NOsubjects, NOstudents, NOteachers, NOclasses } = this.state
        if(subjects){
            for( let i in subjects){
                if(subjects.hasOwnProperty(i)){
                    NOsubjects++
                }
            }  
        }
        if(students){
            for( let i in students){
                if(students.hasOwnProperty(i)){
                    NOstudents++
                }
            }  
        }
        if(teachers){
            for( let i in teachers){
                if(teachers.hasOwnProperty(i)){
                    NOteachers++
                }
            }  
        }
        if(classes){
            for( let i in classes){
                if(classes.hasOwnProperty(i)){
                    NOclasses++
                }
            }  
        }

        

        const optionsIT = {
            animationEnabled: true,
            title: {
                text: "INFORMATION TECHNOLOGY"
            },
            data: [{
                type: "pie",
                startAngle: 70,
                toolTipContent: "<b>{label}</b>: {y}%",
                legendText: "{label}",
                indexLabelFontSize: 15,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 28, label: "Graphic Design" },
                    { y: 39, label: "Website Programming" },
                    { y: 19, label: "Mobile Programming" },
                    { y: 5, label: "Computer Science" },
                    { y: 10, label: "Artifical Intelligence" }
                ]
            }]
        }

        const optionsBAF = {
            animationEnabled: true,
            title: {
                text: "BANKING AND FINANCE",
            },
            data: [{
                type: "pie",
                startAngle: 61,
                toolTipContent: "<b>{label}</b>: {y}%",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 15, label: "Public Finance Management" },
                    { y: 49, label: "Accountant" },
                    { y: 12, label: "Business Management" },
                    { y: 9, label: "Tax Industry" },
                    { y: 15, label: "Business Finance" }
                ]
            }]
        }

        return (
            <div className='DefaultAdmin'>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em 0.1em' }} >
                    <Grid item xs={12}>
                        <h5 style={{ color: '#34495e' }}>
                            <b> Default </b>
                            <AccountBalanceIcon className="mb-2" />
                        </h5>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card>
                            <CanvasJSChart options={optionsIT} />
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card>
                            <CanvasJSChart options={optionsBAF} />
                        </Card>
                    </Grid>
                    <Grid className="mt-3 mb-3" item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            className='subject'
                            elevation={4}
                        >
                            <Card className='cardSubject'>
                                <Fab className='ml-1' style={{ outline: '0' }} color="primary">
                                    <b>{ NOsubjects }</b>
                                </Fab>
                            </Card>
                            <div className="col-12 mb-4" style={{ height: '30px' }}>
                                <h5 style={{ marginLeft: '35%' }}>
                                    <b style={{textShadow: '0.05em 0.05em 0.05em #34495e', color:'#34495e'}}>
                                        SUBJECTS
                                    </b>
                                </h5>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className="mt-3 mb-3" item lg={3} md={3} sm={6} xs={12} >
                        <Paper
                            className='subject'
                            elevation={4}
                        >
                            <Card className='cardSubject'>
                                <Fab className='ml-1' style={{ outline: '0' }} color="secondary">
                                    <b>{NOclasses}</b>
                                </Fab>
                            </Card>
                            <div className="col-12 mb-4" style={{ height: '30px' }}>
                                <h5 style={{ marginLeft: '35%' }}>
                                    <b style={{textShadow: '0.05em 0.05em 0.05em #34495e', color:'#34495e'}}>
                                        CLASSES
                                    </b>
                                </h5>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className="mt-3 mb-3" item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            className='subject'
                            elevation={4}
                        >
                            <Card className='cardSubject'>
                                <Fab className='ml-1' style={{ outline: '0', backgroundColor : '#00e676' }}>
                                    <b className='text-light'>{ NOteachers }</b>
                                </Fab>
                            </Card>
                            <div className="col-12 mb-4" style={{ height: '30px' }}>
                                <h5 style={{ marginLeft: '35%' }}>
                                    <b style={{textShadow: '0.05em 0.05em 0.05em #34495e', color:'#34495e'}}>
                                        TEACHERS
                                    </b>
                                </h5>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid className="mt-3 mb-3" item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            className='subject'
                            elevation={4}
                        >
                            <Card className='cardSubject'>
                                <Fab className='ml-1' style={{ outline: '0', backgroundColor:'#ffea00' }}>
                                    <b className='text-light'>{NOstudents}</b>
                                </Fab>
                            </Card>
                            <div className="col-12 mb-4" style={{ height: '30px' }}>
                                <h5 style={{ marginLeft: '35%' }}>
                                    <b style={{textShadow: '0.05em 0.05em 0.05em #34495e', color:'#34495e'}}>
                                        STUDENTS
                                    </b>
                                </h5>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em 0.1em', marginTop: '10px' }} >
                    {/* <Grid item lg={12} md={12} sm={12} xs={12}>
                        <h4 style={{ color: '#34495e' }} className='text-center mt-2'>
                            <b>ATTENDANCE CLASSES TODAY ({this.state.date})</b>
                        </h4>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TableContainer component={Paper}>
                            <Table className='table' aria-label="customized table">
                                <TableHead>
                                    <TableRow className='titleTable' style={{ backgroundColor: '#34495e' }}>
                                        <TableCell className='TableCell' >CLASS</TableCell>
                                        <TableCell className='TableCell' align="right">NUMBER OF STUDENT</TableCell>
                                        <TableCell className='TableCell' align="right">SUBJECTS</TableCell>
                                        <TableCell className='TableCell' align="right">TEACHER</TableCell>
                                        <TableCell className='TableCell' align="right">ATTENDED</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                   
                                    {this.showTableDefault(this.data)}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid> */}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        subjects: state.dataSubjects.dataSubjects.data,
        teachers: state.dataTeachers.dataTeachers.data,
        students: state.dataStudents.dataStudents.data,
        classes: state.dataClasses.dataClasses.data,
    }
}

export default connect(mapStateToProps, null)(Default) 