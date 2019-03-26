import React from 'react';

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TestPage = () => { // Stateless Component
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
                                {"Test Page"}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
};

export default TestPage;