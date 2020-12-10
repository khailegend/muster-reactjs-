import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class TableTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherList: [],
            role: ''
        }
    }


    showTeacherList = (teachers) => {
        var result = null;
        if (teachers) {
            result = teachers.map((teacher, index) => {          
                return teacher.is_super_user == false && (
                    <TableRow className="btn btn-light" hover key={index}>
                        <TableCell style={{ minWidth: 170 }} className='TableCell'>{teacher.name}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{teacher.email}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{teacher.major}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{teacher.birthday}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{teacher.address}</TableCell>
                    </TableRow>
                )
            });
        }
        return result;
    }

    render() {
        let { teachers, admin } = this.props
        let { teacherList, role } = this.state

        if(teachers){   
            teacherList = teachers     
        }

        if(admin){
            role = admin.role
        }

        return (
            <div >
                { role == "admin" && (
                    <Button 
                        startIcon={<PersonAddIcon/>}
                        color="primary" variant="contained" 
                        style={{ outline: '0', marginBottom: '10px'}}
                        onClick={this.props.onShowModalAddTeacher}
                    >
                        <b> Add Teacher </b>
                    </Button>
                )}
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="customized table">
                        <TableHead>
                            <TableRow  className='titleTable' style={{ backgroundColor: '#00838f' }}>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">NAME</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">EMAIL</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">MAJOR</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">BIRTHDAY</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">ADDRESS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {this.showTeacherList(teacherList)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onShowModalAddTeacher : () => {
            dispatch(actions.showModalAddTeacher());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.dataTeachers.dataTeachers.data,
        admin: state.dataAdmin.dataAdmin.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTeachers);