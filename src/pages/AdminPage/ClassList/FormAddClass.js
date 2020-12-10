import React, { Component } from 'react';
import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/index'; 

class FormAddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            teachersNotAdmin: [],
            className:'',
            subject: '',
            teacher: ''

        }
    }

    onChangeClassName = (event) => {
        this.setState({
            className: event.target.value
        })
    }

    selectedSubject = (event, values) => {
        this.setState({
            subject: values
        })
    } 

    selectedStudents = (event, values) => {
        this.setState({
            studentsList: values
        })
    }

    selectedTeachers = (event, values) => {
        if(values.is_super_user == false){
            this.setState({
                teacher: values
            })
        }
    }

    createClass = async() => {
        let {
            studentsList,
            className,
            subject,
            teacher
        } = this.state

        let student_ids = []
        for(let i in studentsList){
            student_ids.push(studentsList[i]._id)
        }

        const url = 'https://main.musterapis.xyz';
        let token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            url: `${url}/class`,
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`
            },
            data : {
                name : className,
                teacher_id:  teacher._id ,
                subject_id: subject._id,
                student_ids: student_ids
            }
        }

        axios(options)
            .then(resp => {
                this.props.onOpenSnackbar()
                window.location.reload()
            })
            .catch(error => {
                console.log(error.message);
            })

        this.props.onCloseModalAddClasses()
    }
    


    render() {
        let { subjects, students, teachers } = this.props
        let { studentsList, teachersNotAdmin, className, subject, teacher } = this.state
        
        for( let  i in teachers ){
            if(teachers[i].is_super_user == false){
                teachersNotAdmin.push(teachers[i])
            }
        }
        return (
            <div className='FormAddClass container row ' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TextField
                    className="mt-2 col-lg-4"
                    helperText="Incorrect entry"
                    // error="true"
                    name="className"
                    label="Class Name"
                    variant="outlined"
                    onChange={this.onChangeClassName}
                />
                <Autocomplete
                    className="mt-2 col-lg-4"
                    options={subjects}
                    getOptionLabel={(option) => option.name}
                    onChange={this.selectedSubject}
                    renderInput={(params) => <TextField {...params} label="Subjects" variant="outlined" />}
                />
                <Autocomplete
                    className="mt-2 col-lg-4"
                    options={teachersNotAdmin}
                    getOptionLabel={(option) => option.name+" : "+option.major}
                    onChange={this.selectedTeachers}
                    renderInput={(params) => <TextField {...params} label="Teacher" variant="outlined" />}
                />
                <Autocomplete
                    className="mt-4 col-lg-12"
                    multiple
                    options={students}
                    getOptionLabel={(option) => option.id +":"+ option.name+":"+option.major}
                    filterSelectedOptions
                    onChange={this.selectedStudents}
                    renderOption={(option) => (
                        <React.Fragment key={option.id}>
                            <div className="row" style={{ Width: "100%" }}>
                                <i className="col-3" style={{ minWidth: "170px" }} >{option.id}</i> 
                                <i className="col-3" style={{ minWidth: "170px" }} >{option.name}</i> 
                                <i className="col-4" style={{ minWidth: "300px" }} >{option.major}</i>
                            </div >
                        </React.Fragment>
                      )}
                    renderInput={(params) => (
                        <TextField
                            name='students'
                            {...params}
                            variant="outlined"
                            label="Selected Students"
                            placeholder="Student"
                        />
                    )}
                />

                <TableContainer className="mt-2" component={Paper} style={{ maxHeight : '350px'}}>
                    <Table stickyHeader  aria-label="simple table">
                        <TableHead className="bg-light">
                            <TableRow>
                                <TableCell style={{ minWidth: 170 }} >ID</TableCell>
                                <TableCell style={{ minWidth: 170 }} align="center">FULL NAME</TableCell>
                                <TableCell style={{ minWidth: 170 }} align="center">DATE OF BIRTH</TableCell>
                                <TableCell style={{ minWidth: 170 }} align="center">MAJOR</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { studentsList.map((student , index ) => (
                                <TableRow key={student.id}>
                                    <TableCell style={{ minWidth: 170 }} component="th" scope="row">{student.id}</TableCell>
                                    <TableCell style={{ minWidth: 170 }} align="center">{student.name}</TableCell>
                                    <TableCell style={{ minWidth: 170 }} align="center">{student.birthday}</TableCell>
                                    <TableCell style={{ minWidth: 170 }} align="center">{student.major}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                { studentsList.length > 1 && className && subject && teacher && (  
                    <Button 
                        className = "mt-3" 
                        color = "primary"  
                        variant="contained"
                        onClick = {this.createClass}
                        style = {{margin: 'auto' }}
                    >
                        <b>Create Class</b>
                    </Button>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        subjects: state.dataSubjects.dataSubjects.data,
        students: state.dataStudents.dataStudents.data,
        teachers: state.dataTeachers.dataTeachers.data
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onOpenSnackbar: () => {
            dispatch(actions.openSnackbar());
        },
        onCloseModalAddClasses : () => {
            dispatch(actions.closeModalAddClasses());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddClass);