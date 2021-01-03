import React from 'react'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import {NavLink } from 'react-router-dom'


function Home() {
    return (
        <>
        <Grid container spacing={1} justify="center">
            <Grid item xs={12}>
            <h1>Welcome to the Poll App</h1>
            </Grid>
            <Grid item>
            <NavLink to="/Poll"><Button startIcon={<SaveIcon />} size="large" variant="contained" color="primary">Create</Button></NavLink>       
            </Grid>
            <Grid item>
            <NavLink to="/Posts"><Button startIcon={<AddIcon />} variant="contained" color="secondary" size="large">Posts</Button></NavLink>
            </Grid>
        </Grid>
        
            
        
        </>
    )
}

export default Home
