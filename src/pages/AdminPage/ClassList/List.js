import React, { Component } from 'react'
import SnackbarWarning from '../../../components/ComponentWarning/snackbar';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';

import { connect } from 'react-redux';



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: [],
            keyFilter: '',
        }
    }

    showClasses = (classes) => {
        var result = null;
        let { keyFilter } = this.props
        let keyF = this.state.keyFilter
        keyF = keyFilter

        if (classes) {
            result = classes.map((classes, index) => {

                return keyFilter == classes.name 
                                    || keyFilter == classes.id 
                                    || keyFilter == classes.mask 
                                    || keyFilter == classes.teacher_name
                                    || keyFilter == classes.subject_name  
                                    || keyFilter == 'All Department' 
                                    || keyFilter == '' ?
                (
                    <TableRow hover className="btn btn-light" key={index}>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' >{classes.name}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="center">
                            {(classes.student_ids).length}
                        </TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">
                            { (classes.mask) == "IT" ? "Information Technology" : "Banking and Finance"}
                        </TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{classes.teacher_name}</TableCell>
                        <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">{classes.subject_name}</TableCell>
                    </TableRow>
                ) : null
            });
        }
        return result;
    }

    render() {
        let { classes } = this.props
        let { classList, NoN } = this.state
        
        if( classes ){
            classList = classes 
        }

        return (
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="customized table">
                        <TableHead>
                            <TableRow className='titleTable' style={{ backgroundColor: '#388e3c' }}>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' >CLASS</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="center">NUMBER OF STUDENT</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">MAJOR</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">TEACHER</TableCell>
                                <TableCell style={{ minWidth: 170 }} className='TableCell' align="left">SUBJECT</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {this.showClasses(classList)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <SnackbarWarning />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.dataClasses.dataClasses.data,
        keyControl: state.controlClassList,
        keyFilter: state.filter
    }
}
export default connect(mapStateToProps, null)(List);