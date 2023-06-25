import { NextRequest } from 'next/server';

// get user by Id
export async function GET(req) {
    // get id from params
    const request = new NextRequest(req);
    const userId = request.nextUrl.searchParams.get('userId');

    // get user by id
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return {
        status: 200,
        body: {
            user,
        },
    };
}
