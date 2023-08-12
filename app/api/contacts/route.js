import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

// get contact info for job
export async function POST(req) {
    let data = await req.json();

    if (data.jobId) {
        const contact = await prisma.job.findFirst({
            where: {
                id: data.jobId,
            },
            select: {
                contact: true,
            },
        });

        return NextResponse.json(contact);
    } else return NextResponse.json({ message: 'No contact found' });
}

// being called twice

export async function GET(req) {
    // get param from url
    const request = new NextRequest(req);
    const contactId = request.nextUrl.searchParams.get('contactId');

    const contact = await prisma.people.findFirst({
        where: {
            id: contactId,
        },
    });

    return NextResponse.json(contact);
}
