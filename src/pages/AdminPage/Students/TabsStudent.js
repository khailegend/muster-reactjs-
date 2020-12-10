import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index'

class TabsStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'All Department',
            titleClass : 'All Class',
            classesList : []
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    handleSelectDropDown = (id) => {
        this.setState({
            title : 'All Department',
            titleClass : 'All Classes',
        })

        this.props.onKeyFilter(id)
    }

    handleSelectDropDownDe = (id) => {
        this.setState({
            title : id,
            titleClass : 'All Classes'
        })

        this.props.onKeyFilter(id)
    }

    handleSelectDropDownClass = (id, ids) => {
        this.setState({
            title : 'All Department',
            titleClass : id
        })

        this.props.onKeyFilter(id)
    }

    reTitle = () => {
        this.setState = ({
            title : 'All Department'
        })
    }

    render() {
        let { classes } = this.props
        let { classesList } = this.state

        if(classes){
            classesList = classes
        }

        return (
            <div className='TabsStudent'>
                <Nav className="row" justify defaultActiveKey="ALL" style={{outline : '0'}}>
                    <Nav.Item className="col-xl-12 col-sm-12" onClick={() => this.handleSelectDropDown('All Department')}>
                        <Nav.Link eventKey="ALL">
                            <b>All Students</b>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-xl-12 col-sm-12">
                        <b>
                        <NavDropdown title={this.state.title} id="nav-dropdown">
                        <NavDropdown.Item 
                                eventKey="ALL" 
                                onClick={() => this.handleSelectDropDownDe('All Department')}
                            >
                                All Department
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                eventKey="IT" 
                                onClick={() => this.handleSelectDropDownDe('Information Technology')}
                            >
                                Information Technology
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                eventKey="BAF"
                                onClick={() => this.handleSelectDropDownDe('Banking and Finance')}
                            >
                                Banking and Finance
                            </NavDropdown.Item>
                        </NavDropdown>
                        </b>
                    </Nav.Item>
                    <Nav.Item className="col-xl-12 col-sm-12 ">
                        <b>
                        <NavDropdown title={this.state.titleClass} id="nav-dropdown">
                            {classesList.map((classes, index) => (
                                <NavDropdown.Item 
                                    key = {classes.name}
                                    eventKey = "NAME"
                                    onClick = {() => this.handleSelectDropDownClass(classes.name)}
                                >
                                    {classes.name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        </b>
                    </Nav.Item>
                </Nav>
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

const mapStateToProps = (state) => {
    return {
        classes : state.dataClasses.dataClasses.data
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TabsStudent);