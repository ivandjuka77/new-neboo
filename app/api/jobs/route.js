import { log } from 'console';
import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';

import { options } from '../auth/[...nextauth]/route';

export async function POST(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;
    let data = await req.json();

    log(data, 'data');

    const user = await prisma.user.findFirst({
        where: {
            name: currentUserName,
        },
    });

    // Change to unique ID
    const currentUserId = await prisma.user
        .findFirst({
            where: {
                name: currentUserName,
            },
        })
        .then((user) => user?.id);

    const job = await prisma.job.create({
        data: {
            ...data,
            userId: currentUserId,
        },
    });
}
