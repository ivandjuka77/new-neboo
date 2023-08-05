'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContactStore } from '@/store/ContactStore';

import { cn } from '@/lib/utils';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import AddContact from './AddContact';

const ContactCard = ({ className, ...props }: any) => {
    const router = useRouter();
    const job = props.job;
    const [getContacts] = useContactStore((state) => [state.getContacts]);
    const [setContact] = useContactStore((state) => [state.setContact]);
    const [contacts] = useContactStore((state) => [state.contacts]);
    const [contact] = useContactStore((state) => [state.contact]);
    const [contactInfo, setContactInfo] = useState({
        id: '',
        name: '',
        jobCompanyName: '',
        jobTitle: '',
        message: '',
        link: '',
    });

    useEffect(() => {
        if (job?.contactId) {
            setContact(job?.contactId);
            setContactInfo({
                id: job?.contactId,
                name: '',
                jobCompanyName: '',
                jobTitle: '',
                message: '',
                link: '',
            });
        } else {
            getContacts();
        }
    }, [getContacts, job?.contactId, setContact]);

    return (
        <Card className={cn('mt-5', className)} {...props}>
            <CardHeader>
                <CardTitle className="text-left text-2xl">Contact</CardTitle>
                <CardDescription>
                    {contactInfo?.id ? (
                        <div className="mt-3 flex flex-col text-left">
                            <span className="text-lg font-bold tracking-tight">
                                Name: {contact?.name}
                            </span>

                            <span className="text-lg font-bold tracking-tight">
                                Position: {contact?.jobTitle}
                            </span>
                        </div>
                    ) : (
                        <AddContact contacts={contacts} jobId={job?.id} />
                    )}
                </CardDescription>
            </CardHeader>
            {contactInfo?.id ? (
                <CardFooter>
                    <div className=" flex items-center space-x-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Show Message</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="text-black dark:text-white">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Your Message
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        {contact?.message}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>Copy</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Checkbox id="message" />
                        <label
                            htmlFor="message"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Message sent
                        </label>
                    </div>
                </CardFooter>
            ) : (
                ''
            )}
        </Card>
    );
};
export default ContactCard;
