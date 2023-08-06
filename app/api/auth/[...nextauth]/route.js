import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/lib/prisma';

export const options = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'jsmith',
                },
            },
            async authorize(credentials, req) {
                console.log('credentials', credentials);
                const { username, password } = credentials;
                if (username === 'demo123' && password === 'demo123') {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: 'test@test.com',
                        },
                    });

                    console.log('user', user);

                    if (user) {
                        console.log('return user', user);
                        return user;
                    }
                }
                return null;
            },
        }),
    ],

    debug: process.env.NODE_ENV === 'development',
    // pages: {
    //     signIn: '/auth/signin',
    // },
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
