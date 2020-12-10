import React from 'react';
import Default from './Default/Default';
import Subjects from './Subjects/Subjects';
import ClassList from './ClassList/ClassList'
import Students from './Students/Students';
import ErrorPage from './ErrorPage/ErrorPage';
import TeacherList from './TeacherList/TeacherList'

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import ClassIcon from '@material-ui/icons/Class';
// import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SubjectIcon from '@material-ui/icons/Subject';


export const admin = localStorage.getItem('admin')

const routeMenuAdminManager = [
    {
      primary : 'Default' ,
      icon : <AccountBalanceIcon/>,
      path : '/admin/:name',
      link : '',
      exact : true,
      main: ({ match, location }) => <Default match = {match} location = {location}/>
    },
    // {
    //   primary : 'Course' ,
    //   icon :  <BookmarksIcon/> ,
    //   path : `/admin/:name/course`,
    //   link : `/course`,
    //   exact : true,
    //   main: () => <Default />
    // },
    { 
      primary: 'Subject List',
      icon : <SubjectIcon/> ,
      path : `/admin/:name/subjects`,
      link : '/subjects',
      exact : true,
      main: ({ match, location }) => <Subjects match = {match} location = {location}/>
    },
    { 
      primary: 'Class List',
      icon : <ClassIcon/> ,
      path : `/admin/:name/classlist`,
      link : '/classlist',
      exact : true,
      main: ({ match, location }) => <ClassList match = {match} location = {location}/>
    },
    {
      primary : 'Teacher List',
      icon :  <ListAltRoundedIcon/>,
      path : `/admin/:name/teacherlist`,
      link : '/teacherlist',
      exact : true,
      main: ({ match, location }) => <TeacherList match = {match} location = {location} />
    },
    {
      primary : 'Students',
      icon : <GroupIcon/>,
      path : `/admin/:name/students`,
      link : '/students',
      exact : true,
      main: ({ match, location }) => <Students match = {match} location = {location} />
    },
    {
      path : `/admin/:name/:error`,
      exact : false,
      main: ({match}) => <ErrorPage match ={match} />
    },
]

export default routeMenuAdminManager;