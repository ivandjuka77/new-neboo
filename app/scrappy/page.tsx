import { log } from 'console';
import { redirect } from 'next/navigation';
import Moment from 'moment';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AddPerson from '@/components/AddPerson';
import DeleteButton from '@/components/DeleteButton';
import LinkForm from '@/components/LinkForm';
import MessageModal from '@/components/MessageModal';

import { options } from '../api/auth/[...nextauth]/route';

const Scrappy = async () => {
    const session: any = await getServerSession(options);
    const currentUserName = session?.user?.name;

    if (!session) {
        redirect('/');
    }
    const currentUserId = await prisma.user
        .findFirst({
            where: {
                name: currentUserName,
            },
        })
        .then((user: any) => user?.id);

    log(currentUserId, 'id');

    const users = await prisma.people.findMany({
        where: {
            userId: currentUserId,
        },
    });

    const formattedDate = Moment(users[0].createdAt).format('DD.MM.YYYY');
    return (
        <div className="">
            <Table>
                <TableCaption>
                    <AddPerson />
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Date Added </TableHead>
                        <TableHead>Name </TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Job Company Name</TableHead>
                        <TableHead>Message</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((person: any) => (
                        <TableRow
                            key={person.id}
                            className="text-black dark:text-white"
                        >
                            <TableCell>{formattedDate}</TableCell>
                            <TableCell className="font-medium">
                                <a
                                    href={person.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    {person.name}
                                </a>
                            </TableCell>
                            <TableCell>{person.jobTitle}</TableCell>
                            <TableCell>{person.jobCompanyName}</TableCell>
                            <TableCell>
                                <MessageModal
                                    data-person={person.id}
                                    message={person.message}
                                />
                            </TableCell>
                            <TableCell className="text-right">
                                <DeleteButton id={person.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default Scrappy;
