import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
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
    console.log('123');
    return {
        status: 200,
        body: {
            message: 'Job created',
        },
    };
}

export async function DELETE(req) {
    const request = new NextRequest(req);
    const targetJobId = request.nextUrl.searchParams.get('targetJobId');
    log(targetJobId, 'this is id');

    const job = await prisma.job.delete({
        where: {
            id: targetJobId,
        },
    });
}

// update contact info
export async function PATCH(req) {
    let data = await req.json();
    const targetJobId = data.targetJobId;
    const targetContactId = data.targetContactId;

    log(data, 'data');

    const job = await prisma.job.update({
        where: {
            id: targetJobId,
        },
        data: {
            contactId: targetContactId,
        },
    });

    return NextResponse.json({
        message: `${targetJobId} updated with contact ${targetContactId}`,
    });
}
