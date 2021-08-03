//import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
//import { onError } from "@apollo/client/link/error";
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, useQuery, gql } from "@apollo/client";


import App from './App';

/*const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),);
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });*/

    
    const httpLink = new HttpLink({
        uri: "http://localhost:3001"
    });


    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });


export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)