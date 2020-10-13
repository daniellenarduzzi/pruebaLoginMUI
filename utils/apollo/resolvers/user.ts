import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { User } from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { setLoginSession, getLoginSession } from '@/authUtils/index'
import { removeTokenCookie } from '@/authUtils/authCookies'
import { connection } from '@/dbUtils'

export const userResolver = {
    Query: {
        viewer: async (_, __, { req }) => {
            let session
            try {
                session = await getLoginSession(req)
            } catch (error) {
                throw error('server error');
            }   
            if (!session.id) {
                throw new AuthenticationError(
                    'Authentication token is invalid, please log in'
                )
            }
            return session
        },
    },
    Mutation: {
        signup: async (_, { input }) => {
            let user
            try {
                await connection()
                user = await User.findOne({ email: input.email });
            } catch(error) {
                throw error('db error');
            }
            if (user) {
                throw new UserInputError('Email already in use');
            }
            let hashedPassword
            try {
                hashedPassword = await bcrypt.hash(input.password, 12);
            } catch (error) {
                throw new Error('bcrypt error');
            }
            const newUser = new User({ ...input, password:hashedPassword });
            try {
                const result = await newUser.save();
                return result
            } catch(error) {
                throw error('db error');
            }
        },
        
        login: async (_, { input }, { res }) => {
            const {email, password} = input
            let user
            try {
                await connection()
                user = await User.findOne({ email })
            } catch(error) {
                throw new Error('db error');
            }
            if (!user) {
                throw new UserInputError("User not found")
            }
            let isPasswordValid
            try {
                isPasswordValid = await bcrypt.compare(password, user.password);
            } catch (error) {
                throw new Error('bcrypt error');
            }
            if (!isPasswordValid) {
                throw new UserInputError("Invalid Password")
            }
            const secret = process.env.JWT_SECRET_KEY || 'secretkey'
            const token = jwt.sign({email: user.email}, secret, {expiresIn: '1d'});
            const session = {
                id: token,
                email,
                }
            await setLoginSession(res, session)
            return { token };
        },
        logout: async (_, __, context) => {
            removeTokenCookie(context.res)
            return true
        },
    }
}