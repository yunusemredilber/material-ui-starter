import React, {Component} from 'react';
import {connect} from "react-redux";

// Material UI Imports
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Local Storage Operations
import {getLocalSettings,setLocalSettings} from "../../services/settingsOperations";

// Action Imports
import {setSettings} from "../../actions/settings-actions";

// Material UI Styles
const styles = theme => ({
    root: {
        //display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    slider: {
        padding: '22px 0px',
    },
});

class SettingsPage extends Component {

    handleSliderChange = (event, value) => {
        // redux
        this.props.setSettings({...this.props.settings,typography:{...this.props.settings.typography,fontSize:value}});
        // local-storage
        let settings = getLocalSettings();
        if (settings!==null && settings!==undefined) {
            settings.typography.fontSize=value;
            setLocalSettings(settings);
        }
    };

    handleDarkModeToggle = () =>{
        // redux
        if (this.props.settings.palette.type==='dark')
            this.props.setSettings({...this.props.settings,palette:{...this.props.settings.palette,type:'light'}});
        else this.props.setSettings({...this.props.settings,palette:{...this.props.settings.palette,type:'dark'}});
        // local-storage
        let settings = getLocalSettings();
        if (settings!==null && settings!==undefined) {
            if (settings.palette.type === 'dark')
                settings.palette.type = 'light';
            else settings.palette.type = 'dark';
            setLocalSettings(settings);
        }
    };

    handleClick = (m,d,l,ms,ls,ds) => {
        // redux
        this.props.setSettings({...this.props.settings,palette:{...this.props.settings.palette,primary:{...this.props.settings.palette.primary,main:m,dark:d,light:l},secondary:{...this.props.settings.palette.secondary,main:ms,dark:ds,light:ls}}});
        // local-storage
        let settings = getLocalSettings();
        if (settings!==null && settings!==undefined) {
            settings.palette.primary.main=m;
            settings.palette.primary.light=l;
            settings.palette.primary.dark=d;
            settings.palette.secondary.main=ms;
            settings.palette.secondary.light=ls;
            settings.palette.secondary.dark=ds;
            setLocalSettings(settings);
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '90vh' }}
            >
                <Grid item xs={6} style={{maxWidth:'90vw'}}>
            <div className={classes.root}>
                    <Paper style={{marginTop:"10px",textAlign:"center"}}>
                        <Typography variant="h4" gutterBottom style={{padding:"10px"}}>
                            {"Settings"}
                        </Typography>
                    </Paper>
                    <Paper style={{marginTop:"10px"}}>
                        <div style={{padding:"10px"}}>
                        <Typography variant="body1" gutterBottom>
                            {"Dark Mode"}
                        </Typography>
                        <Divider />
                        <div style={{textAlign:"center"}}>
                            <Switch
                                checked={this.props.settings.palette.type==='dark'}
                                onChange={this.handleDarkModeToggle}
                                value="checkedA"
                            />
                        </div>
                        </div>
                    </Paper>
                    <Paper style={{marginTop:"10px"}}>
                        <div style={{padding:"10px"}}>
                        <Typography variant="body1" gutterBottom>
                            {"Colors"}
                        </Typography>
                        <Divider />
                            <div style={{textAlign:"center"}}>
                        {[{name:"Deep Purple",main:"#673ab7",light:"#9a67ea",dark:"#320b86",
                            main_s:"#7e57c2",light_s:"#b085f5",dark_s:"#4d2c91"},
                            {name:"Red",main:"#f44336",light:"#ff7961",dark:"#ba000d",
                                main_s:"#ef5350",light_s:"#ff867c",dark_s:"#b61827"},
                            {name:"Indigo",main:"#3f51b5",light:"#757de8",dark:"#002984",
                                main_s:"#5c6bc0",light_s:"#8e99f3",dark_s:"#26418f"},
                            {name:"Teal",main:"#009688",light:"#52c7b8",dark:"#00675b",
                                main_s:"#26a69a",light_s:"#64d8cb",dark_s:"#00766c"},
                            {name:"Deep Orange",main:"#ff5722",light:"#ff8a50",dark:"#c41c00",
                                main_s:"#ff7043",light_s:"#ffa270",dark_s:"#c63f17"},
                            {name:"Amber",main:"#ffc107",light:"#fff350",dark:"#c79100",
                                main_s:"#ffca28",light_s:"#fffd61",dark_s:"#c79a00"},
                            {name:"Lime",main:"#cddc39",light:"#ffff6e",dark:"#99aa00",
                                main_s:"#d4e157",light_s:"#ffff89",dark_s:"#a0af22"},
                        ].map((data,i)=>{
                            return(<Chip
                                key={i}
                                avatar={<Avatar style={{backgroundColor:data.main}}/>}
                                label={data.name}
                                onClick={()=>this.handleClick(data.main,data.dark,data.light,data.main_s,data.light_s,data.dark_s)}
                                className={classes.chip}
                                variant="outlined"
                            />);
                        })}
                            </div>
                        </div>
                    </Paper>
                    <Paper style={{marginTop:"10px",overflow:"hidden"}}>
                        <div style={{padding:"10px"}}>
                        <Typography variant="body1" gutterBottom>
                            {"Font Size"}
                        </Typography>
                        <Divider />
                        <div style={{width:"300px",margin:"auto"}}>
                            <Slider
                                classes={{ container: classes.slider }}
                                value={this.props.settings.typography.fontSize}
                                aria-labelledby="label"
                                onChange={this.handleSliderChange}
                                min={10}
                                max={24}
                                step={0.5}
                            />
                        </div>
                        </div>
                    </Paper>
            </div>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setSettings,
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SettingsPage));