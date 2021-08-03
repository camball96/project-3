const postsRes = require('./posts');
const usersRes =require('./users');
const commentsRes =require('./comments');

module.exports = {
    Posts: {
        commentCount: (parent) => parent.comments.length,
        likeCount: (parent) => parent.likes.length,
        
    },
    Query: {
        ...postsRes.Query
    
    },
    Mutation: {
        ...usersRes.Mutation,
        ...postsRes.Mutation,
        ...commentsRes.Mutation,
    }
};
