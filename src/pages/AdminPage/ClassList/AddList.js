import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role :''
        }
    }

    render() {
        let { admin } = this.props
        let { role } = this.state

        if(admin){
            role = admin.role
        }
        return (
            <Grid className='ml-2 mt-3'>
                {role == 'admin' && (
                    <Button
                        style={{ backgroundColor: '#01579b', outline: '0' }}
                        variant="contained"
                        color="secondary"
                        className='addClass'
                        startIcon={<PlaylistAddIcon />}
                        onClick={this.props.onShowModalAddClasses}
                    >
                        <b>ADD CLASSES</b>
                    </Button>
                )}
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowModalAddClasses: () => {
            dispatch(actions.showModalAddClasses());
        }
    }
}
const mapStateToProps = (state) => {
    return {
        admin: state.dataAdmin.dataAdmin.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList);