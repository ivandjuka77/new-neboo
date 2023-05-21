import { prisma } from '@/lib/prisma';
import { log } from 'console';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/route';
import { NextRequest } from 'next/server';

export async function POST(req) {
	const session = await getServerSession(options);
	const currentUserName = session?.user?.name;
	let data = await req.json();
	data = data[0];
	log(data);
	const { name, jobCompanyName } = data;

	const user = await prisma.user.findFirst({
		where: {
			name: currentUserName,
		},
	});

	const techArray = user.tech;

	const techSentence = `${techArray[0]}, ${techArray[1]} and ${techArray[2]}`;

	console.log(techSentence, 'techArray');

	const message = `Hi ${name}, I saw that ${jobCompanyName} is looking for new programmers and I am quite interested in the position! I am mainly a ${techSentence} programmer, so I have been working with these tools for a while now. I would be happy if we could set up a 5 minute call to talk a bit more about the position. Thank you in advance! ${currentUserName}`;

	// Change to unique ID
	const currentUserId = await prisma.user
		.findFirst({
			where: {
				name: currentUserName,
			},
		})
		.then((user) => user?.id);

	const people = await prisma.people.create({
		data: {
			...data,
			message: message,
			userId: currentUserId,
		},
	});
}

export async function DELETE(req) {
	const request = new NextRequest(req);
	const targetPersonId = request.nextUrl.searchParams.get('targetPersonId');
	log(targetPersonId, 'this is id');

	const people = await prisma.people.delete({
		where: {
			id: targetPersonId,
		},
	});
}
