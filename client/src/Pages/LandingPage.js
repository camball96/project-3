import React, { useState, useContext } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import gql from "graphql-tag";
import { Grid, Image } from 'semantic-ui-react'





import Login from '../Pages/login'
import Register from '../Pages/register'


function LandingPage() {

    return (
            <Grid columns={2} style= {{marginTop: 5, marginLeft: 15, marginRight: 15}}>
                <Grid.Column>
                    <Image src="./Assets/olmate.png"/>
                </Grid.Column>
                <Grid.Column>
                    <Login/>
                </Grid.Column>
            </Grid>
    );
}

export default LandingPage;