const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = require('./server/typeDefs')
const { MONGODB } = require('./config');
const resolvers = require('./server/resolvers')


// Setting up Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
});


//Connects to our Mongo AtlasDB
mongoose.connect(MONGODB, {useNewUrlParser:true })
    .then(() => {
        console.log('mongodb connected');
        return server.listen({ port: 3001 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });