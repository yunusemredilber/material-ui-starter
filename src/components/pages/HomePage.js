import React, {Component} from 'react';
import {connect} from "react-redux";

// Material UI Imports
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Action Imports
import {setTest} from "../../actions/home-actions";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh' }}
                >
                    <Grid item xs={6} style={{maxWidth:'90vw'}}>
                        <Paper style={{marginTop:"10px",textAlign:"center"}}>
                            <Typography variant="h4" gutterBottom style={{padding:"10px"}}>
                                {"Home Page"}
                            </Typography>
                            <Typography variant="h5" gutterBottom style={{padding:"10px"}}>
                                <Fab color="primary" style={{marginRight:"20px"}} onClick={
                                    ()=>{this.props.setTest(this.props.home.test-1)}
                                }>
                                    <RemoveIcon/>
                                </Fab>
                                {this.props.home.test}
                                <Fab color="primary" style={{marginLeft:"20px"}} onClick={
                                    ()=>{this.props.setTest(this.props.home.test+1)}
                                }>
                                    <AddIcon/>
                                </Fab>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setTest
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);