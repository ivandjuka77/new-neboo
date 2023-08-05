import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';

import { options } from '../auth/[...nextauth]/route';

export async function POST(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;
    let data = await req.json();
    const { name, job, location, url } = data[0];

    const user = await prisma.user.findFirst({
        where: {
            name: currentUserName,
        },
    });

    const message = `Hi ${name || 'John Doe'},

    I saw that ${
        location || 'Google'
    } is looking for new programmers and I am quite interested in the position!
    I am mainly a JavaScript and React programmer, so I have been working with these tools for a while now. I would be happy if we could set up a 5 minute call to talk a bit more about the position.
    
    Thank you in advance!
    ${currentUserName}`;

    const person = {
        name: name || 'John Doe',
        jobTitle: job || 'Recruiter',
        jobCompanyName: location || 'Google',
        url: url || 'https://www.linkedin.com',
    };

    // // Change to unique ID
    const currentUserId = await prisma.user
        .findFirst({
            where: {
                name: currentUserName,
            },
        })
        .then((user) => user?.id);

    const people = await prisma.people.create({
        data: {
            ...person,
            message: message,
            userId: currentUserId,
        },
    });

    return NextResponse.json({ message: 'success message' });
}

export async function GET(req) {
    const session = await getServerSession(options);
    const currentUserName = session?.user?.name;

    const people = await prisma.people.findMany({
        where: {
            user: {
                name: currentUserName,
            },
        },
    });

    return NextResponse.json(people);
}

export async function DELETE(req) {
    const request = new NextRequest(req);
    const targetPersonId = request.nextUrl.searchParams.get('targetPersonId');

    const people = await prisma.people.delete({
        where: {
            id: targetPersonId,
        },
    });
}
