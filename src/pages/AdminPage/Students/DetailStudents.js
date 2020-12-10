import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import DetailsIcon from '@material-ui/icons/Details';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class DetailStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailStudent : [],
            idDetail: ''
        }
        
    }

    render() {
        let { show, keyDetail, students } = this.props
        let { detailStudent, idDetail } = this.state 
        if( students ){
            detailStudent = students
        }

        if(keyDetail){
            idDetail = keyDetail
        }

        return (
            <div>
                <Dialog
                    open={show}
                    maxWidth="md"
                    onClose={this.props.onCloseDetailStudent}
                >
                    <DialogTitle style={{ background: '#34495e'}}>
                        <DetailsIcon className='mb-1 mr-1 text-light'/>
                        <b className="text-light"> 
                            Detail Student  
                            
                        </b>
                        <IconButton 
                            edge="end"
                            color="inherit" 
                            onClick={this.props.onCloseDetailStudent} 
                            aria-label="close"
                            className="text-light"
                        >
                                <CloseIcon />
                        </IconButton>
                        
                    </DialogTitle>
                    <DialogContent>
                        <div className="container mb-3">
                                {detailStudent.map((student, index) => student.id == idDetail &&( 
                                    <form className="row justify-content-center border border-dark" key={student.id}>
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="First Name" 
                                            defaultValue={student.first_name} 
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Last Name" 
                                            defaultValue={student.last_name} 
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Name" 
                                            defaultValue={student.name} 
                                        />

                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Email" 
                                            defaultValue={student.email}
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Address" 
                                            defaultValue={student.address} 
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Birthday" 
                                            defaultValue={student.birthday} 
                                        />

                                        <TextField 
                                            className="mt-4 mb-4 ml-3 mr-3 col-lg-3" 
                                            required label="ID" 
                                            defaultValue={student.id} 
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Major" 
                                            defaultValue={student.major} 
                                        />
                                        <TextField 
                                            className="mt-4 ml-3 mr-3 col-lg-3" 
                                            required label="Phone" 
                                            defaultValue={student.phone}
                                        />
                                    </form>
                                ))};
                        </div>
                        </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students : state.dataStudents.dataStudents.data,
        show : state.detailStudent,
        keyDetail : state.keyDetail 
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseDetailStudent: () => {
            dispatch(actions.closeDetailStudent());
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailStudents);