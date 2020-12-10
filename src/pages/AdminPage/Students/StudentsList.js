import React, { Component } from 'react'
import SnackbarWarning from '../../../components/ComponentWarning/snackbar';

import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'
import Students from './Students';


class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            keyFilter: '',
        }
    }

    showDetail = (id) => {
        this.props.onAddKeyDetail(id)
        this.props.onShowDetailStudent()
    } 

    showStudents = (students) => {
        var result = null;
        let { keyFilter } = this.props
        let keyF = this.state.keyFilter
        keyF = keyFilter

        if (students) {
            result = students.map((students, index) => {             
                return keyFilter == students.first_name 
                                    || keyFilter == students.last_name 
                                    || keyFilter == students.id 
                                    || keyFilter == students.major 
                                    || keyFilter == 'All Department' 
                                    || keyFilter == '' ? 
                (
                    <TableRow onClick={() => this.showDetail(students.id)} className="btn btn-light" hover key={index}>
                        <TableCell style={{ minWidth: 170 }} className='TableCell'>{students.id}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{students.first_name}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{students.last_name}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{students.birthday}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{students.major}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{students.email}</TableCell>
                    </TableRow>
                ) : null
            });
        }
        return result;
    }

    render() {
        let { students } = this.props
        let { studentsList } = this.state
        
        if( students ){
            studentsList = students
        }

        return (
            <div >
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="customized table">
                        <TableHead >
                            <TableRow  className='titleTable' style={{ backgroundColor: '#607d8b' }}>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">ID</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">FIRST NAME</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">LAST NAME</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">BIRTHDAY</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">MAJOR</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">EMAIL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {this.showStudents(studentsList)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <SnackbarWarning />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.dataStudents.dataStudents.data,
        keyFilter : state.filter      
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowDetailStudent: () => {
            dispatch(actions.showDetailStudent());
        },
        onAddKeyDetail: (idDetail) => {
            dispatch(actions.keyDetail(idDetail));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);