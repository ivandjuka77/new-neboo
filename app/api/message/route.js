// This route will take in the data from the person and create an outreach message based on their information.

import { prisma } from '@/lib/prisma';
import { log } from 'console';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req, res) {
	const request = new NextRequest(req);
	const targetPersonId = request.nextUrl.searchParams.get('targetPersonId');

	// const prompt = 'hi';

	const payload = {
		model: 'gpt-3.5-turbo',
		// prompt: 'hi',
		temperature: 0.7,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 200,
		n: 1,
		messages: [
			{
				role: 'system',
				content: 'You are a chatbot assistant that will write outreach messages for jobs.',
			},
			{ role: 'user', content: 'I am looking for a job.' },
			{
				role: 'assistant',
				content: 'Could you provide some more information about you so I can make a message?',
			},
			{
				role: 'user',
				content:
					'As Danijela, an experienced professional in JavaScript, React, and Node.js technologies, you are tasked with crafting a message to contact Gogi on behalf of Voxwise. To ensure accuracy and effectiveness, please utilize the provided template: Hi [name], I saw that [company name] is looking for new programmers and I am quite interested in the position! I am mainly a [your technology] programmer, so I have been working with these tools for a while now. I would be happy if we could set up a 5 minute call to talk a bit more about the position. Thank you in advance! [Your name]',
			},
		],
	};

	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
		},
		method: 'POST',
		body: JSON.stringify(payload),
	});

	const json = await response.json();

	return NextResponse.json(json);
}
