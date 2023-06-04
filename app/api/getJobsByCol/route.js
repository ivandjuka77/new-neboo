import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';
import { options } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
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

    const jobs = await prisma.job.findMany({
        where: {
            userId: currentUserId,
        },
    });

    const columns = jobs.reduce((acc, job) => {
        if (!acc.get(job.status)) {
            acc.set(job.status, {
                id: job.status,
                job: [],
            });
        }

        acc.get(job.status)?.job.push(job);

        return acc;
    }, new Map());

    const columnTypes = [
        'potential',
        'messageSent',
        'call',
        'interview',
        'offer',
    ];

    columnTypes.forEach((type) => {
        if (!columns.get(type)) {
            columns.set(type, {
                id: type,
                job: [],
            });
        }
    });

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a, b) => {
            return columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0]);
        })
    );

    // console.log(jobs);

    return NextResponse.json({
        columns: Array.from(sortedColumns.values()),
    });
}
