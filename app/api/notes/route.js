import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';

import { options } from '../auth/[...nextauth]/route';

export async function POST(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;
    let data = await req.json();

    const { notes, jobId } = data;

    const job = await prisma.job.findUnique({
        where: {
            id: jobId,
        },
    });

    // put the notes in the job
    const updatedJob = await prisma.job.update({
        where: {
            id: jobId,
        },
        data: {
            notes: notes,
        },
    });

    return {
        status: 200,
        body: {
            message: 'Notes updated',
        },
    };
}
