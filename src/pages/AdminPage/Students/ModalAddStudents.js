import React, { Component } from 'react';

import TableAddStudents from './TableAddStudents';
import './StudentsCSS/ModalAddStudents.css';
import "antd/dist/antd.css"; //warning : affect to all css of admin page and material ui

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class ModalAddStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
   
    render() {
        let { show } = this.props

        return (
            <div>
                <Dialog 
                    fullScreen 
                    open={show} 
                    onClose={this.props.onCloseModalAddStudents}
                >
                    <AppBar >
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.props.onCloseModalAddStudents} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className='text-light' >
                                ADD STUDENTS
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={{ marginTop: '70px' }}>
                        <TableAddStudents />
                    </div>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        show: state.modalAddStudents,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseModalAddStudents: () => {
            dispatch(actions.closeModalAddStudents());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddStudents);