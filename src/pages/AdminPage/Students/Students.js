import React, { Component } from 'react';

import Filter from './Filter';
import TabsStudent from './TabsStudent';
import StudentsList from './StudentsList';
import ModalAddStudents from './ModalAddStudents';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import GroupIcon from '@material-ui/icons/Group';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'
import DetailStudents from './DetailStudents';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ''
        }
    }

    render() {
        let { match, admin } = this.props
        let { role } = this.state

        if (admin) {
            role = admin.role
        }
        return (
            <div className='Students'>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em ' }} >
                    <Grid item xs={12}>
                        <h5 style={{ color: '#34495e' }}>
                            <b> Students </b>
                            <GroupIcon className="mb-1" />
                        </h5>
                        <Filter />
                    </Grid>
                    <Grid item lg={6} md={7} sm={12} xs={12}>
                        <TabsStudent match={match} />
                    </Grid>
                    <Grid item lg={6} md={7} sm={12} xs={12}>
                        { role == "admin" && (
                            <Button
                                style={{ backgroundColor: '#01579b', outline: '0' }}
                                variant="contained"
                                color="secondary"
                                className='addClass'
                                startIcon={<PlaylistAddIcon />}
                                onClick={this.props.onShowModalAddStudents}
                            >
                                <b>ADD STUDENTS</b>
                            </Button>
                        )}
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <StudentsList />
                    </Grid>
                </Grid>
                <Grid className='mt-2' container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em' }} >

                </Grid>
                <ModalAddStudents />
                <DetailStudents />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowModalAddStudents: () => {
            dispatch(actions.showModalAddStudents());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.dataAdmin.dataAdmin.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);