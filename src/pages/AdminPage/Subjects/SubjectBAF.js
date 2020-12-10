import React, { Component } from 'react';
import './SubjectsCSS/subjects.css'

import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import Fab from '@material-ui/core/Fab';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add';

import { connect } from 'react-redux';
import axios from 'axios';

class SubjectsBAK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            subjectId: '',
            subjectName: '',
            open: false,
            role: ''
        }
    }

    handleDelete = (subId) => {
        const url = 'https://main.musterapis.xyz';
        let token = localStorage.getItem('token');
        const options = {
            method: 'DELETE',
            url: `${url}/subjects`,
            headers: {
                authorization: `Bearer ${token}`
            },
            params: {
                _id: subId
            }
        }

        axios(options)
            .then(
                console.log('delete success')
            )
            .catch(error => {
                console.log(error.message);
            })
    }


    showSubject = (subjects) => {
        var result = null;
        if (subjects) {
            result = subjects.map((subject, index) => {
                return subject.mask == 'BAF' && (
                    <Grid className='mt-4' key={index} item lg={5} md={5} sm={5} xs={12}>
                        <Paper
                            className='subject row'
                            elevation={4}
                        >
                            <Card className='cardSubject'>
                                <Fab style={{ outline: '0', backgroundColor: '#64dd17', color: 'white' }} >
                                    <b>{subject.id}</b>
                                </Fab>
                            </Card>
                            
                            <div className="col-12 mb-2" style={{ height: '50px' }}>
                                <p className='mt-2'><b>{subject.name}</b></p>
                            </div>
                            <div>
                                <small className='ml-2 mb-2'>Teacher:</small>
                            </div>
                        </Paper>
                    </Grid>
                );
            });
        }
        return result;
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    changeText = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]: value
        });
    }

    async addSubject() {
        
        let {subjects, subjectId, subjectName } = this.state
        if(subjectId && subjectName) {
        subjects.push(
            {
                id: subjectId,
                name: subjectName
            }
        )
        this.setState({
            open: false
        })
        }
        const url = 'https://main.musterapis.xyz';
        let token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            url: `${url}/subject`,
            headers: {
                authorization: `Bearer ${token}`
            },
            data : {
                id : subjectId ,
                name :  subjectName ,
                mask : 'BAF'
            }
        }

        axios(options)
            .then(resp => {  
                window.location.reload()
            })
            .catch(error => {
                console.log(error.message);
            })
        
        let { dataSubjects } =  this.props
        this.setState({
            subjects : dataSubjects
        })
    }

    render() {
        let { dataSubjects, admin } =  this.props
        let { role } = this.state
        this.state.subjects = dataSubjects

        if(admin){
            role = admin.role
        }

        return (
            <div className='subjectIT'>
                <Alert
                    variant="filled"
                    color="success"
                    icon={<MonetizationOnIcon className='mt-1' />}
                    action={ role == "admin" && (
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            style={{ outline: '0' }}
                            onClick={this.handleClickOpen}
                        >
                            <AddCircleIcon fontSize="inherit" />
                        </IconButton>
                    )}
                >
                    <b style={{ fontSize: '150%', textShadow: '0.1em 0.1em 0.2em black' }}>
                        BANKING AND FINANCE
                    </b>
                </Alert>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" >
                        <b style={{ color: '#34495e' }} >
                            <AddIcon />
                            Adding Subjects To The BANKING AND FINANCE
                        </b>
                        <hr />
                    </DialogTitle>
                    <DialogContent>
                        <form className='row justify-content-around' noValidate autoComplete="off" >
                            <TextField
                                onChange={this.changeText}
                                name='subjectId'
                                value={this.subjectId}
                                className=' col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12'
                                id="subjectID"
                                label="ID Subject"
                                helperText="*Note: Subject Id must be in capital letters"
                            />

                            <TextField
                                onChange={this.changeText}
                                name='subjectName'
                                value={this.subjectName}
                                className='col-xl-5  col-lg-5 col-md-5 col-sm-5 col-12'
                                id="subjectName"
                                label="Subject Name"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ outline: '0' }} onClick={this.handleClose} color="primary">
                            <b>Cancel</b>
                        </Button>
                        <Button style={{ outline: '0' }} onClick={this.addSubject.bind(this)} color="primary" autoFocus>
                            <b>Add</b>
                        </Button>
                    </DialogActions>
                </Dialog>

                <div className="mt-1 ml-4">
                    <Grid container justify="space-evenly" alignItems="center" direction="row">
                        {this.showSubject(this.state.subjects)}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       dataSubjects: state.dataSubjects.dataSubjects.data,
       admin: state.dataAdmin.dataAdmin.data
    }
};

export default connect(mapStateToProps, null)(SubjectsBAK);