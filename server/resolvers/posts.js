const { AuthenticationError, UserInputError } = require('apollo-server-core');
const Post = require('../../models/Post')
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
                throw new Error(err);
            }
            },
            async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (post) {
                return post;
                } else {
                throw new Error('Post not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createPost(_, { body }, context){
            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });

            const post = await newPost.save();

            return post;
        },
    
        async likePost(_,{ postId}, context){
            const { username } = checkAuth(context);

            const post = await Post.findById(postId);

            if(post){
                if(post.likes.find(like => like.username === username)){
                    // If post post has already been liked, then unlike it
                    post.likes = post.likes.filter(like => like.username != username);

                }else {
                    //not liked? then like the post!
                    post.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    })
                }
                await post.save();
                return post;
            }else throw new UserInputError('Cannot find post')
        }
    }
};
