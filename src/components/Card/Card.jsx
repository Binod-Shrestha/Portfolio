import React from 'react';
import {CardContent, Typography, Grid, Card} from "@material-ui/core";

const Cards = () => {
    return(
        <div >
            <Grid container spacing={2} justify="center" className="card">
                <Grid item component={Card}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom>Project</Typography>
                   <Typography variant="h6" gutterBottom>Description</Typography>
                   <Typography variant="body2" gutterBottom>Description:</Typography>
               </CardContent>
            </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Skills</Typography>
                        <Typography variant="h6" gutterBottom>Description</Typography>
                        <Typography variant="body2" gutterBottom>Description:</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Education</Typography>
                        <Typography variant="h6" gutterBottom>Description</Typography>
                        <Typography variant="body2" gutterBottom>Description:</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Hackathon</Typography>
                        <Typography variant="h6" gutterBottom>Description</Typography>
                        <Typography variant="body2" gutterBottom>Description:</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Resume</Typography>
                        <Typography variant="h6" gutterBottom>Description</Typography>
                        <Typography variant="body2" gutterBottom>Description:</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
}
export default Cards