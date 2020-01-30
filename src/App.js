import React from 'react';
import './App.css';
import makeStyles from "@material-ui/styles/makeStyles";
import {Route, Router} from "react-router-dom";
import { AppBar, Drawer as DrawerMui, Toolbar, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {history} from './redux/configureStore';
import {goHome} from "./routing/helper";
import { withRoot } from "./withRoot";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';

function Routes() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Route exact={true} path="/" component={HomePage}/>
            <Route exact={true} path="/login" component={LoginPage}/>
        </div>
    );
}
function Drawer(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.drawerHeader}/>
            <Divider/>
            <List>
                <ListItem button onClick={() => {
                    goHome();
                    props.handleDrawerToggle();
                }}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
            </List>
            <Divider/>
            <List>
            <ListItem button onClick={() => history.push("/todo")}>
            {/*<ListItemIcon>*/}
            {/*/!*<TodoIcon todoList={props.todoList} />*!/*/}
            {/*</ListItemIcon>*/}
            <ListItemText primary="Todo" />
            </ListItem>
            </List>
        </div>
    );
}


function App() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const todoList = useSelector((state: RootState) => state.todoList);
    const isMobile = useMediaQuery((theme) =>
        theme.breakpoints.down("sm")
    );

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
  return (
        <Router history={history}>
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            className={classes.navIconHide}
                            >
                            <MenuIcon />
                            </IconButton>
                            {/*<IconButton*/}
                                {/*color="inherit"*/}
                                {/*aria-label="go home"*/}
                                {/*onClick={() => {*/}
                                    {/*goHome();*/}
                                {/*}}*/}
                            {/*>*/}
                                {/*<HomeIcon/>*/}
                            {/*</IconButton>*/}
                            <Typography
                                variant="h6"
                                noWrap={isMobile}
                            >
                                The Test UI
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <DrawerMui
                            variant="temporary"
                            anchor={"left"}
                            open={mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <Drawer  handleDrawerToggle={() => handleDrawerToggle()}/>
                        </DrawerMui>
                    </Hidden>
                    <Hidden smDown>
                        <DrawerMui
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <Drawer handleDrawerToggle={() => handleDrawerToggle()}/>
                        </DrawerMui>
                    </Hidden>
                    <Routes/>
                </div>
            </div>
        </Router>
    );
}
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        zIx: 1,
        overflow: "hidden",
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
    },
    appBar: {
       zIndex: theme.zIndex.drawer + 1,
        position: "absolute",
    },
    navIconHide: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 64,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            position: "relative",
            height: "100%",
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        height: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64,
        },
    },
}));


export default withRoot(App);
