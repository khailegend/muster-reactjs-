import React, { Component } from 'react';

import './ClassListCSS/Filter.css'

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search';

import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/index'; 

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {       
        }
    }
    onChangeBox = (event) => {
        var target = event.target;
        var value = target.value      
        this.props.onKeyFilter(value)
    }

    render() {
        return (
            <div className='filter'>
                <form className='form-filter' >
                    <TextField
                        id="outlined-basic"
                        label="Filter"
                        variant="outlined"
                        fullWidth
                        ref='name'
                        value = {this.keyFiler}
                        onChange = {this.onChangeBox}
                        InputProps={{                                   
                            startAdornment: (
                                <InputAdornment  position="start" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        
                    />
                </form>
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onKeyFilter : (keyFilter) => {
            dispatch(actions.keyFilter(keyFilter));
        }
    }
} 

export default connect( null, mapDisPatchToProps)(Filter);


