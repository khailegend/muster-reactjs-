import React, { Component } from 'react';
import './MenuTop.css';
import $ from 'jquery';
import { Link, Route } from 'react-router-dom';
import Logo from '../../assets/logoResence.png';
import routes from '../../routes';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : '';
            return (
                <li className = {active}>
                    <Link to = {to} className = "link" >
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class MenuTop extends Component {
    showMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                if (route.name != null) {
                    return (
                        <MenuLink
                            key = {index}
                            label = {route.name}
                            to = {route.path}
                            activeOnlyWhenExact = {route.exact}
                        />
                    );
                }
            });
        }
        return result;
    }

    render() {
        $(document).ready(function () {
            $('#icon').click(function () {
                $('ul').toggleClass('show');
            });
        });
        
        return (
            <div className = "MenuTop">
                <nav className = "fixel">
                    <img alt = "Logo" id = "logo" src = {Logo} />
                    <ul>
                        {this.showMenus(routes)}
                    </ul>
                    <label id = "icon">
                        <i className = "fas fa-bars"></i>
                    </label>
                </nav>
            </div>
        );
    }
}

export default MenuTop;