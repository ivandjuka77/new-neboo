'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContactStore } from '@/store/ContactStore';
import { Check, ChevronsUpDown } from 'lucide-react';

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
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import AddContact from './AddContact';

const ContactCard = ({ className, ...props }: any) => {
    const router = useRouter();
    const job = props.job;
    console.log(job, 'job');
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
        if (job.contactId) {
            console.log(job.contactId, 'job.contactId this is the contact id');
            setContact(job.contactId);
            setContactInfo({
                id: job.contactId,
                name: '',
                jobCompanyName: '',
                jobTitle: '',
                message: '',
                link: '',
            });
        } else {
            getContacts();
        }
    }, [getContacts, job.contactId, setContact]);

    console.log(contacts, 'these are the contacts');
    console.log(contact, 'this is the contact!!!!!!!!!');

    // const contactInfo.id = false;
    // console.log(contacts, 'contactsss');

    return (
        <Card className={cn('mt-5', className)} {...props}>
            <CardHeader>
                <CardTitle className="text-left text-2xl">Contact</CardTitle>
                <CardDescription>
                    {contactInfo.id ? (
                        <div className="mt-3 flex flex-col text-left">
                            <span className="text-lg font-bold tracking-tight">
                                Name: {contact.name}
                            </span>

                            <span className="text-lg font-bold tracking-tight">
                                Position: {contact.jobTitle}
                            </span>
                        </div>
                    ) : (
                        <AddContact contacts={contacts} jobId={job.id} />
                    )}
                </CardDescription>
            </CardHeader>
            {contactInfo.id ? (
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
                                        {contact.message}
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
