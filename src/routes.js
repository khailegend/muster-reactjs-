import React from 'react';

import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import Admin from './pages/AdminPage/Admin';
import About from './pages/AboutPage/index';
import Contact from './pages/ContactPage/Index'

// const adminLogin = () =>{
//     if(localStorage.token !== 'undefined'){
//         return 'ADMIN'
//     } else {
//         return 'LOGIN'
        
//     }
// }

const routes = [
    {   
        name: 'HOME',
        path: '/',
        exact : true,
        main : () => <Home />
    },
    {   
        name: 'ABOUT',
        path: '/about',
        exact : true,
        main : () => <About />
    },
    {
        name: 'CONTACT',
        path: '/contact',
        exact : true,
        main : () => <Contact />
    },
    {   
        name: 'LOGIN',
        path: '/login',
        exact: true,
        main: ({location , match}) => <Login location={location} match={match} />
    },
    {
        path: '/admin/:name',
        exact: false ,
        main: ({ match, location }) => <Admin match={match} location={location} />
    }
]

export default routes 