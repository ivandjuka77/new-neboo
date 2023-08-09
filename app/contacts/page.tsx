import { log } from 'console';
import { redirect } from 'next/navigation';
import { Loader2 } from 'lucide-react';
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
import MessageModal from '@/components/MessageModal';

import { options } from '../api/auth/[...nextauth]/route';

const formatDate = (date: string) => {
    return Moment(date).format('DD.MM.YYYY');
};

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const Contacts = async () => {
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

    return (
        <div className="mt-5">
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
                        <TableHead>{'\n'}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((person: any) => (
                        <TableRow
                            key={person.id}
                            className="text-black dark:text-white"
                        >
                            <TableCell>
                                {formatDate(person.createdAt)}
                            </TableCell>
                            <TableCell className="font-medium">
                                <a
                                    href={person.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    {capitalize(person.name)}
                                </a>
                            </TableCell>
                            <TableCell>{capitalize(person.jobTitle)}</TableCell>
                            <TableCell>
                                {capitalize(person.jobCompanyName)}
                            </TableCell>
                            <TableCell>
                                <MessageModal
                                    data-person={person.id}
                                    message={person.message}
                                />
                            </TableCell>
                            <TableCell className="text-right ">
                                <DeleteButton id={person.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default Contacts;
