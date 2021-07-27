const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');


const { MONGODB } = require('./config');
const Post = require('./models/Post')


const typeDefs =  gql `
    type Posts{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }

    type Query{
        getPosts: [Posts]
    }
`

const resolvers = {
    Query: {
       async getPosts(){
            try{
                const posts = await Post.find();
                return posts;
            } catch(err){
                throw new Error(err);
            }
       }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(MONGODB, {useNewUrlParser:true })
    .then(() => {
        console.log('mongodb connected');
        return server.listen({ port: 3001 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });