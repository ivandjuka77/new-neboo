import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { prisma } from '@/lib/prisma';

export const options = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
