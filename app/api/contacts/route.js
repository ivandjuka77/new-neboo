import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';

import { options } from '../auth/[...nextauth]/route';

// get contact info for job
export async function POST(req) {
    let data = await req.json();
    console.log(data);
    // console.log(targetJobId, 'this is id');

    if (data.jobId) {
        const contact = await prisma.job.findFirst({
            where: {
                id: data.jobId,
            },
            select: {
                contact: true,
            },
        });

        console.log(contact);

        return NextResponse.json(contact);
    } else return NextResponse.json({ message: 'No contact found' });
}

// being called twice

export async function GET(req) {
    // get param from url
    const request = new NextRequest(req);
    const contactId = request.nextUrl.searchParams.get('contactId');
    log(contactId, 'this is id');

    const contact = await prisma.people.findFirst({
        where: {
            id: contactId,
        },
    });

    return NextResponse.json(contact);
}
