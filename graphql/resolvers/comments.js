const { UserInputError } = require('apollo-server');


const Post = require('../../models/Post');
const User = require('../../models/User');
const checkAuth = require('../../util/check-auth');


module.exports = {
    Mutation: {
        createComment: async(_, { postId, body }, context) => {
            const { username } = checkAuth(context);
            if(body.trim() === ''){
                throw new UserInputError('No comment left', {
                    errors: {
                        body: "Comment cannot be left empty!"
                    }
                })
            } 
            const post = await Post.findById(postId);
            if(post){
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            }else throw new UserInputError('Cannot find post');
        }
    }
}