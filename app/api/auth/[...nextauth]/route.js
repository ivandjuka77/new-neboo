import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const options = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
