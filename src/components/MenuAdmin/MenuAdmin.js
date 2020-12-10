import React from 'react';
import { useSelector } from 'react-redux'

import './MenuAdmin.css'
import routeMenuAdminManager from '../../pages/AdminPage/routeMenuAdminManager'

import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link, useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import Spinner from 'react-bootstrap/Spinner'

import imgAdmin from '../../assets/avtAdmin.jpg'


const drawerWidth = 240;
const drawerHeight = 63;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: drawerHeight,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 8,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(0) + 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    height: drawerHeight,
  },
  IconCloseDrawer: {
    marginTop: 7,
    marginLeft: 3,
  },
  AvatarLeft: {
    marginTop: 10,
    marginLeft: 10,
  }
}));


export default function MenuTopAdmin(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openInforAccount = Boolean(anchorEl);
  const [openMenuleft, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const closeDrawer = () => {
    setOpen(false)
  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  const logOut = () => {
    history.push('/login')
    localStorage.clear();
    window.location.reload();
  }
  const backHome = () => {
    window.location.href = "/"
  }


  const { url } = props
  const showMenu = (routeMenuAdmin) => {
    var result = null
    if (routeMenuAdmin.length > 0) {
      result = routeMenuAdmin.map((route, index) => {
        if (route.primary != null) {
          return (
            <Link onClick={closeDrawer} key={index} to={`/admin/${url}${route.link}`} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem button >
                <Tooltip  title={route.primary} >
                  <ListItemIcon style={{ color: '#34495e' }}>{route.icon}</ListItemIcon>
                </Tooltip>
                <ListItemText primary={route.primary} />
              </ListItem>
            </Link>
          );
        }
      });
    }
    return result;
  }


  const nameAdmin = localStorage.getItem('admin')

  return (
    <div id='menuAdmin' className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: "#34495e" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openMenuleft,
        })}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}
            style={{ outline: "0" }} edge="start"
            color="inherit" aria-label="menu"
            className={clsx(classes.menuButton, { [classes.hide]: openMenuleft, })}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <b className='text-light'> PRESENCE </b>
          </Typography>
          <Avatar alt="Admin" />
          <div id="infoAdmin" className="ml-3 mr-2" >
            <b className='text-light mr-1'> Admin: </b>
            <i>{nameAdmin}</i>
          </div>
          <div>
            <IconButton style={{ outline: "0" }}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openInforAccount}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}> Profile </MenuItem>
              <MenuItem onClick={handleClose}> My account </MenuItem>
              <MenuItem onClick={logOut}> Log out </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openMenuleft,
          [classes.drawerClose]: !openMenuleft,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openMenuleft,
            [classes.drawerClose]: !openMenuleft,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}
            style={{ outline: '0' }}
            className={classes.IconCloseDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.toolbar}>
          <div className="row">
            <div className='col-3'>
              <Avatar alt='Admin' className={classes.AvatarLeft} />
            </div>
            <div style={{ position: 'absolute' }} className='col ml-5 mt-2'>
              <b className='ml-4 mr-1'> Admin: </b>
              <i> {nameAdmin} </i><br></br>
            </div>
            <div style={{ position: 'absolute' }} className='col offset-3 ml-5 mt-4'>
              <i className='ml-4' >
                <FiberManualRecordIcon style={{ fontSize: 12, color: '#76ff03' }} />
                <Spinner className='mt-2' animation="grow" size='sm' style={{ color: '#76ff03', marginLeft: -14 }} />
              </i>
              <i> Online </i>
            </div>
          </div>
        </div>
        <Divider />
        <List className={classes.ListItemMenuLeft}>
          {showMenu(routeMenuAdminManager)}
        </List>
        <Divider />
        <Link onClick={backHome} to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button >
            <ListItemIcon style={{ color: '#34495e' }}><ArrowBackIcon/></ListItemIcon>
            <ListItemText primary='Back Home' />
          </ListItem>
        </Link>
      </Drawer>
    </div>
  );
}



