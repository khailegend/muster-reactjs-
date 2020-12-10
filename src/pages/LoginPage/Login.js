import React, { Component } from 'react';
import './Login.css';
import Header from './Header';

import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions/index'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAdmin: '',
            passAdmin: '',
            show: false,
            alertWarning: '',
            token: localStorage.token,
            is_loggedin: false,
            redirect: false,
            openBackdrop : false ,
        };

        this.onHandleChangeAdmin = this.onHandleChangeAdmin.bind(this)
        this.onHandleSubmitAdmin = this.onHandleSubmitAdmin.bind(this)

    }

    onHandleChangeAdmin(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name]: value
        });
    }


    async onHandleSubmitAdmin(event) {
        event.preventDefault();
        var username = this.state.idAdmin;
        var password = this.state.passAdmin;
        let user_info;
        this.setState({
            openBackdrop : true
        })
        const url = 'http://localhost:8080';
        let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (checkEmail.test(username) && password.length) {
            await axios.post(`${url}/login`, { username, password }, { headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    user_info = res.data.data;
                })
                .catch(error => {
                    console.log(error.message);
                })

            if (!user_info) {
                this.setState({
                    alertWarning: 'Incorrect Username of Password',
                    openBackdrop : false
                })
                this.handleShow();
            } else {
                localStorage.setItem('admin', user_info.name);
                this.setState({
                    is_loggedin: true,
                    token: user_info.token,
                });
            }
        } else if (username == 0 || password == 0) {
            this.setState({
                alertWarning: 'Please ! fill out this field ',
                openBackdrop : false
            })
            this.handleShow();
        }
        else {
            this.setState({
                alertWarning: 'Please ! enter the correct email format Ex: user@gmail.com',
                openBackdrop : false
            })
            this.handleShow();
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    render() {
        var { location } = this.props
        var admin = localStorage.admin
        localStorage.setItem('token', this.state.token);
        if (this.state.is_loggedin || localStorage.token !== 'undefined') {
            return <Redirect to={{
                pathname: `/admin/${admin}`,
                state: {
                    from: location,
                }
            }} />
        }


        return (
            <div>
                <Header />
                <div className="Login">
                    <div className="formBox">
                        <div className="buttonBox ">
                            <div id="btn" ></div>
                            <button style={{ outline: "0" }} className="BTN" onClick={ClickUser}>User</button>
                            <button style={{ outline: "0" }} className="BTN" onClick={ClickAdmin}>Admin</button>


                        </div>
                        <form id="user" className="inputGroup">
                            <input type="email" className="inputField" placeholder="Username" required />
                            <input type="password" autoComplete="on" className="inputField" placeholder="Password" required />

                            <input type="checkbox" className="check-box" />
                            <label ><small> Remember Password</small></label>

                            <button type="submit" className="submitBtn">Log In</button>
                        </form>

                        <form id="admin" className="inputGroup" >
                            <input type="email" value={this.idAdmin} onChange={this.onHandleChangeAdmin}
                                name="idAdmin" className="inputField"
                                placeholder="ID Admin" required />

                            <input type="password" value={this.passAdmin} onChange={this.onHandleChangeAdmin}
                                name="passAdmin" autoComplete="on" className="inputField"
                                placeholder="Password" required />

                            <input type="checkbox" className="check-box" />
                            <label ><small> Remember Password</small></label>

                            <button type="submit" onClick={this.onHandleSubmitAdmin} className="submitBtn">Log In</button>
                        </form>

                        <div className="social-icons">
                            <i className="fab fa-facebook-square "  ></i>
                            <i className="fab fa-twitter-square" ></i>
                            <i className="fab fa-google-plus-square" ></i>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}
                    aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header style={{ backgroundColor: "#34495e" }} closeButton>
                        <Modal.Title className="text-light" id="contained-modal-title-vcenter">Warning from Presence</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-danger">{this.state.alertWarning}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Backdrop style={{color : '#fff' , zIndex : '500'}} open={this.state.openBackdrop} >
                    <CircularProgress color='primary' />
                </Backdrop>
            </div>

        );

    }

}

function ClickAdmin() {
    var x = document.getElementById("user")
    var y = document.getElementById("admin")
    var z = document.getElementById("btn")
    x.style.left = "150%";
    y.style.left = "15%";
    z.style.left = "50%";

}
function ClickUser() {
    var x = document.getElementById("user")
    var y = document.getElementById("admin")
    var z = document.getElementById("btn")
    x.style.left = "15%";
    y.style.left = "150%";
    z.style.left = "0px";


}



export default Login;