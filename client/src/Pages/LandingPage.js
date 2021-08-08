import React, { useState, useContext } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import gql from "graphql-tag";
import { Grid, Image } from 'semantic-ui-react'
import '../App.css'
import logo from '../Assets/olmate.png'


import Login from '../Pages/Login'
import Register from '../Pages/register'



function LandingPage() {

    return (
            <Grid columns={2} style= {{marginTop: 5, marginLeft: 15, marginRight: 15}}>
                <Grid.Column>
                    <img src={logo} width="600" height="300" style={{paddingRight: 10}}/>
                </Grid.Column>
                <Grid.Column>
                    <Login/>
                </Grid.Column>
            </Grid>
    );
}

export default LandingPage;