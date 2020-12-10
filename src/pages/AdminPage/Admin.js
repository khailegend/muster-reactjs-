import React, { Component }  from 'react';

import './Admin.css'
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin.js';
import routeMenuAdminManager from './routeMenuAdminManager';

import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from './../../redux/actions/index';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../redux/actions/getProfileAdmin';
import * as subjectActions from '../../redux/actions/getSubjects';  
import * as studentActions from '../../redux/actions/getStudents';
import * as teacherActions from '../../redux/actions/getTeachers'; 
import * as classActions from '../../redux/actions/getClasses';    


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    async UNSAFE_componentWillMount() {  
        const url = 'http://localhost:8080';
        let token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            url: `${url}/profile`,
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        axios(options)
            .then(res => {
                let dataAdmin = res.data.data
                this.setState({
                    data : dataAdmin,
                    name : dataAdmin.name
                })
                localStorage.setItem('admin' , dataAdmin.name)
            })
            .catch(error => {
                console.log(error.message);
            })
        

        const { actionAdmin, actionSubject, actionStudent, actionTeacher, actionClass } = this.props;
        const { fetchProfileAdminRequest } = actionAdmin;
        const { fetchSubjectsRequest } = actionSubject;
        const { fetchStudentsRequest } = actionStudent;
        const { fetchTeachersRequest } = actionTeacher;
        const { fetchClassesRequest } = actionClass;
        fetchProfileAdminRequest()
        fetchSubjectsRequest()
        fetchStudentsRequest()
        fetchTeachersRequest()
        fetchClassesRequest()
    }

    showContentAdmin = (routeMenuAdminManager) => {
        var result = null;
        if (routeMenuAdminManager.length > 0) {
            result = routeMenuAdminManager.map((route, index) => {
                return (
                    <Route 
                        key = { index } 
                        path = { route.path } 
                        exact = { route.exact } 
                        component = { route.main }  
                    />
                );
                
            });
        }
        return result;
    }

    render() {
        let {match } = this.props
        if(localStorage.token === null || localStorage.token === 'undefined' || !localStorage.token ){
            return <Redirect to = '/login'/>
        }
        if(match.params.name !== localStorage.admin ){
            return <Redirect to ={ `/admin/${localStorage.admin}/error` } />
        }
        return(  
            <Router>
                <div className = "Admin"> 
                    <MenuAdmin url = {this.state.name}/>
                    <div className ='adminPage' >
                        <Switch>
                            { this.showContentAdmin(routeMenuAdminManager) }
                        </Switch>
                    </div>   
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionAdmin: bindActionCreators(adminActions , dispatch),
        actionSubject: bindActionCreators(subjectActions , dispatch),
        actionStudent: bindActionCreators(studentActions , dispatch),
        actionTeacher: bindActionCreators(teacherActions , dispatch),
        actionClass: bindActionCreators(classActions , dispatch)
    }
}

export default connect(null ,mapDispatchToProps)(Admin);