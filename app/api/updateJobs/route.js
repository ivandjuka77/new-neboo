import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';
import { options } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;

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

    const body = await req.json();

    const { jobsId, columnId } = body;

    const updatedJob = await prisma.job.update({
        where: {
            id: jobsId,
        },
        data: {
            status: columnId,
        },
    });

    return {
        status: 200,
        body: updatedJob,
    };
}
