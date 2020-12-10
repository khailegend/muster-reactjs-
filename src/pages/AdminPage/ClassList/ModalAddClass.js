import React, { Component } from 'react';

import FormAddClass from './FormAddClass';
import './ClassListCSS/ModalAddClass.css';
import "antd/dist/antd.css"; //warning : affect to all css of admin page and material ui

import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index' 

class ModalAddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        let {show} = this.props     
        return (
            <Modal  
                show = {show}
                onHide = {this.props.onCloseModalAddClasses} 
                className = 'modal mt-4'
                scrollable = {true}
                dialogClassName = 'modalClass modal-dialog'
            >
                <Modal.Header className = "text-light " style = {{ backgroundColor: "white" }} closeButton>
                    <Modal.Title className = "mt-2" style = {{ color : '#34495e'}}>
                        <PlaylistAddIcon className = 'mb-1'/>
                        <b> ADD CLASSES </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormAddClass/>
                </Modal.Body>
                <Modal.Footer>
                    <Button color = "primary" onClick = {this.props.onCloseModalAddClasses}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       show : state.modalAddClass,
    }
};

const mapDispatchToProps = (dispatch , props) => {
    return {
        onCloseModalAddClasses : () => {
            dispatch(actions.closeModalAddClasses());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddClass);