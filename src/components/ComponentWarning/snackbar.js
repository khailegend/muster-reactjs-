import React, { Component } from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index'

class SnackbarWarning extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Snackbar open={this.props.openSnackbar}
                    autoHideDuration={500}
                    onClose={this.props.onCloseSnackbar}
                >
                    <Alert className='text-success' severity="success">
                        Submit data successfully
                    </Alert>
                </Snackbar>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openSnackbar : state.snackbar
    }
};

const mapDisPatchToProps = (dispatch , props) => {
    return {
        onCloseSnackbar: () => {
            dispatch(actions.closeSnackbar())
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(SnackbarWarning);