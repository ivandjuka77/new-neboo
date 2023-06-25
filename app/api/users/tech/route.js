import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';

import { options } from '../../auth/[...nextauth]/route';

export async function POST(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;
    let data = await req.json();
    const tech = data.tech;
    console.log(tech, 'data');
    const user = await prisma.user.findFirst({
        where: {
            name: currentUserName,
        },
    });

    const techArray = user.tech;

    if (techArray.includes(tech)) {
        return {
            status: 501,
            body: {
                message: 'Tech already exists',
            },
        };
    }

    if (techArray.length > 3) {
        return {
            status: 501,
            body: {
                message: 'Tech limit reached',
            },
        };
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            tech: {
                push: tech,
            },
        },
    });

    return {
        status: 200,
        body: {
            message: 'Tech added successfully',
            data: tech,
        },
    };
}

// Return server session user
export async function GET(req) {
    const session = await getServerSession(options);
    return session;
}
