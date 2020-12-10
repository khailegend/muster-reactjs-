import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import axios from 'axios'
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class FormAddTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            name: '',
            email: '',
            birthday: '',
            address: '',
            phone: '',
            major: '',
            password: ''
        }
    }

    onChangeFormTeacher = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name

        this.setState({
            [name]: value
        })
    }

    addTeacher = async () => {
        let {
            first_name,
            last_name,
            name,
            email,
            birthday,
            address,
            phone,
            major,
            password
        } = this.state

        const url = 'https://main.musterapis.xyz';
        let token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            url: `${url}/create-user`,
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            data: {
                first_name: first_name,
                last_name: last_name,
                name: name,
                email: email,
                birthday: birthday,
                address: address,
                phone: phone,
                major: major,
                password: password
            }
        }

        axios(options)
            .then(res => {
                this.props.onOpenSnackbar()
                window.location.reload()
            })
            .catch(error => {
                console.log(error.message);
            })

            this.props.onCloseModalAddTeacher()
    }

    render() {
        let { show } = this.props

        return (
            <div>
                <Dialog
                    open={show}
                    maxWidth="md"
                    onClose={this.props.onCloseModalAddTeacher}
                >
                    <DialogTitle style={{ background: '#34495e'}}>
                        <PlaylistAddIcon className='mb-1 mr-1 text-light'/>
                        <b className="text-light"> 
                            Add Teacher  
                        </b>

                        <IconButton 
                            edge="end"
                            color="inherit" 
                            onClick={this.props.onCloseModalAddTeacher} 
                            aria-label="close"
                            className="text-light"
                        >
                                <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <div className="container mb-3">
                            <form className="row justify-content-center">
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-2 ml-1 mr-1 col-lg-3" 
                                name="first_name" 
                                label="First Name" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-2 ml-1 mr-1 col-lg-3 "  
                                name="last_name" 
                                label="Last Name" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-2 ml-1 mr-1 col-lg-3 " 
                                name="name" 
                                label="Full Name" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12"  
                                name="email" 
                                label="Email" 
                                variant="outlined" 
                                
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12"  
                                name="password" 
                                label="Password" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12" 
                                name="birthday" 
                                variant="outlined" 
                                label="birthday"
                                type="date" 
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12"  
                                name="address" 
                                label="Address" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12"  
                                name="phone" 
                                label="Phone" 
                                variant="outlined" 
                            />
                            <TextField 
                                onChange={this.onChangeFormTeacher} 
                                className="mt-3 ml-2 mr-2 col-lg-4 col-md-12"  
                                name="major" 
                                label="Major" 
                                variant="outlined" 
                            />
                            </form>
                        </div>
                    </DialogContent>
                    <hr/>
                    <DialogActions>
                        <small><i>* Enter full information to add data</i></small>
                        <Button onClick={this.addTeacher} color="primary" variant="contained">
                            <b> Add Teacher </b>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.modalAddTeacher,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseModalAddTeacher: () => {
            dispatch(actions.closeModalAddTeacher());
        },
        onOpenSnackbar: () => {
            dispatch(actions.openSnackbar())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FormAddTeacher);