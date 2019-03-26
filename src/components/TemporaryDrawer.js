import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Settings from '@material-ui/icons/Settings';
import CloudIcon from '@material-ui/icons/Cloud';
import {NavLink} from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends Component {
    render() {

        const { classes } = this.props;
        const style_unset = {all:"unset"};

        const sideList = (
            <div className={classes.list}>
                <List>

                    <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/" style={style_unset}>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </NavLink>



                    <NavLink className={"unactivePage"}  activeClassName="activePage" exact to="/test" style={style_unset}>
                        <ListItem button key={'TestPage'}>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary={'TestPage'} />
                        </ListItem>
                    </NavLink>

                </List>
                <Divider />
                <List>


                    <NavLink className={"unactivePage"}  activeClassName="activePage" exact to="/settings" style={style_unset}>
                        <ListItem button key={'Settings'}>
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItem>
                    </NavLink>


                    <ListItem button key={'Version'}>
                        <ListItemIcon><CloudIcon /></ListItemIcon>
                        <ListItemText primary={'Version'} secondary={"v0.1"}/>
                    </ListItem>


                </List>
            </div>
        );

        return (
            <div>

                <SwipeableDrawer open={this.props.isDrawerOpen} onClose={this.props.toggleDrawer(false)} onOpen={this.props.toggleDrawer(true)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.toggleDrawer(false)}
                        onKeyDown={this.props.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default withStyles(styles)(TemporaryDrawer);