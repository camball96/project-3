const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators')
const { SECRET_KEY } = require('../../config.js');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        async login(_, { username, password }){
            const { valid, errors } = validateLoginInput(username, password);

            if(!valid){
                throw new UserInputError('Some errors ', { errors });
            }

            const user = await User.findOne({ username });

            if(!user){
                errors.general = 'User not found';
                throw new UserInputError('User not found', {errors});
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                errors.general = 'Incorrect credentials';
                throw new UserInputError('Incorrect credentials', {errors});
            }

            const token = jwt.sign({
                id: User.id,
                email: user.email,
                username: user.username
            }, SECRET_KEY, {expiresIn: '1h'});

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },    
        async register(_, 
        { 
            registerInput: { 
            username, 
            password, 
            confirmPassword, 
            email
            }
        }, 
        ){


        //validate user data,
        const { valid, errors } = validateRegisterInput(
            username, 
            password, 
            confirmPassword, 
            email
        );
        if(!valid){
            throw new UserInputError('Errors', { errors });
        }
        
        //make sure user doesnt already exist
        const user = await User.findOne({ username });
        if(user){
            throw new UserInputError('Username is taken', {
                errors: {
                    username: 'This username is taken'
                }
            });
        }


        //hash password & auth token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, SECRET_KEY, {expiresIn: '1h'});

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
};

